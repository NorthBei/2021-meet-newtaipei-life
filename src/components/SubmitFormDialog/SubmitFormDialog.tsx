import './SubmitFormDialog.scss';

import { useFormik } from 'formik';
import React, { useCallback, useState } from 'react';
import { Accordion, Button, Form, Image, Spinner, Tab } from 'react-bootstrap';
import * as yup from 'yup';

import Dialog from '@/components/Dialog/Dialog';
import ImageCropper from '@/components/ImageCropper';
import StoryItem from '@/components/StoryItem';
import homeData from '@/data/home';
import * as firebase from '@/modules/firebase';
import { ContentType, FORM_CONTENT } from '@/types';

enum TabType {
  Form = 'form',
  Preview = 'preview'
}

const CONTENT_MAX = 50;

const schema = yup.object().shape({
  type: yup.string().required(),
  username: yup.string().required('請填寫姓名！'),
  nickname: yup.string().required('請填寫暱稱！'),
  district: yup.string().required(),
  rating: yup.string().required('請評分新新指數！'),
  phone: yup.string().required('請填寫聯絡電話！'),
  email: yup.string().required('請填寫電子信箱！').email('Email格式錯誤！'),
  content: yup.string().required('請填寫新新生活點子！').max(CONTENT_MAX, `最多只能${CONTENT_MAX}個字！`),
  image: yup.string().required('請上傳一張和新新點子有關的圖片！'),
  agree: yup.bool().required().oneOf([true], '請點選「我已經閱讀並同意」')
});

type FormType = yup.InferType<typeof schema>;

type SubmitFormProps = {
  show: boolean;
  onClose: () => void;
};

const SubmitForm = (props: SubmitFormProps) => {
  const { show, onClose } = props;
  const [imageCropDialogShow, setImageCropDialogShow] = useState(false);
  const [croppedImage, setCroppedImage] = useState<Blob | null>(null);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoading, setLoading] = useState(false);
  const [contentType, setContentType] = useState<ContentType>(ContentType.Idea);
  const [tabType, setTabType] = useState<TabType>(TabType.Form);

  const formik = useFormik<FormType>({
    validationSchema: schema,
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      type: FORM_CONTENT[contentType].title,
      username: '',
      nickname: '',
      district: homeData.section.story.districts[0],
      rating: '5',
      phone: '',
      email: '',
      content: '',
      image: '',
      agree: false
    },
    onSubmit: async (values) => {
      if (croppedImage) {
        try {
          setLoading(true);
          await firebase.addStory(croppedImage, values);
          onHide();
        } catch (error) {
          alert(error);
        } finally {
          setLoading(false);
        }
      } else {
        alert('圖片上傳或裁切出了點問題🥺，可以再試一次嗎');
      }
    }
  });

  const onImageCropReset = useCallback(async () => {
    await formik.setFieldValue('image', '');
    setCroppedImage(null);
  }, [formik]);

  const onImageCropFinished = useCallback(() => {
    setImageCropDialogShow(false);
  }, []);

  const onImageCropDialogClose = useCallback(() => {
    setImageCropDialogShow(false);
    setCroppedImage(null);
  }, []);

  const onFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', () => {
          if (reader.result) {
            setImageSrc(reader.result.toString());
            setImageCropDialogShow(true);
          } else {
            alert('圖片讀取出了問題🥺，麻煩再試一次或換張圖片~');
          }
        });

        if (file) reader.readAsDataURL(file);
      }
      formik.handleChange(e);
    },
    [formik]
  );

  const onPreviewTab = useCallback(async () => {
    const errorObj = await formik.validateForm();
    if (Object.entries(errorObj).length > 0) return;
    setTabType(TabType.Preview);
  }, [formik]);

  const onFormTab = useCallback(() => setTabType(TabType.Form), []);

  const onHide = useCallback(() => {
    formik.resetForm();
    setCroppedImage(null);
    onClose();
    setTabType(TabType.Form);
  }, [formik, onClose]);

  return (
    <>
      <Dialog id="submit-form-modal" show={show} onClose={onHide}>
        <Tab.Container id="submit-form-modal-tab" activeKey={tabType} defaultActiveKey={tabType} transition={false}>
          <Tab.Content>
            <Tab.Pane eventKey={TabType.Form}>
              <h4 className="title fs-4 fw-bold text-center mb-4">我要投稿</h4>
              <Form id="submit-form" onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-4 d-flex align-items-center" controlId="type">
                  <Form.Label className="fw-bold text-nowrap m-0">投稿類型*</Form.Label>
                  <span className="mx-2"></span>
                  {Object.entries(FORM_CONTENT).map(([contentType, contentData]) => {
                    return (
                      <Form.Check
                        key={contentType}
                        id={contentType}
                        name="type"
                        type="radio"
                        label={`我的${contentData.title}`}
                        value={contentData.title}
                        onChange={(e) => {
                          setContentType(contentType as ContentType);
                          formik.handleChange(e);
                        }}
                        isInvalid={!!formik.errors.type}
                        feedback={formik.errors.type}
                        inline
                        required
                        checked={formik.values.type === contentData.title}
                      />
                    );
                  })}
                  <Form.Control.Feedback type="invalid">{formik.errors.type}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4 d-flex" controlId="username">
                  <Form.Label className="fw-bold text-nowrap m-0 mt-2">姓名*</Form.Label>
                  <div className="d-flex flex-column flex-grow-1 ms-3">
                    <Form.Control
                      name="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      isInvalid={!!formik.errors.username}
                      size="sm"
                      type="text"
                      placeholder="抽獎寄件用"
                    />
                    <Form.Control.Feedback type="invalid">{formik.errors.username}</Form.Control.Feedback>
                  </div>
                </Form.Group>
                <Form.Group className="mb-4 d-flex" controlId="nickname">
                  <Form.Label className="fw-bold text-nowrap m-0 mt-2">暱稱*</Form.Label>
                  <div className="d-flex flex-column flex-grow-1 ms-3">
                    <Form.Control
                      name="nickname"
                      onChange={formik.handleChange}
                      value={formik.values.nickname}
                      isInvalid={!!formik.errors.nickname}
                      size="sm"
                      type="text"
                      placeholder="顯示於故事牆"
                    />
                    <Form.Control.Feedback type="invalid">{formik.errors.nickname}</Form.Control.Feedback>
                  </div>
                </Form.Group>
                <Form.Group className="mb-4 d-flex" controlId="phone">
                  <Form.Label className="fw-bold text-nowrap m-0 mt-2">行政區*</Form.Label>
                  <div className="d-flex flex-column flex-grow-1 ms-3">
                    <Form.Select
                      name="district"
                      onChange={formik.handleChange}
                      value={formik.values.district}
                      isInvalid={!!formik.errors.district}
                      size="sm"
                    >
                      {homeData.section.story.districts.map((district) => {
                        return (
                          <option key={district} value={district}>
                            {district}
                          </option>
                        );
                      })}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{formik.errors.district}</Form.Control.Feedback>
                  </div>
                </Form.Group>
                <Form.Group className="mb-4 d-flex" controlId="rating">
                  <Form.Label className="fw-bold text-nowrap m-0 mt-2">
                    <div>新新指數* </div>
                    <div className="note fw-normal">你覺得這件事多新奇</div>
                  </Form.Label>
                  <div className="d-flex flex-column flex-grow-1 ms-3">
                    <Form.Select
                      name="rating"
                      onChange={formik.handleChange}
                      value={formik.values.rating}
                      isInvalid={!!formik.errors.rating}
                      size="sm"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{formik.errors.rating}</Form.Control.Feedback>
                  </div>
                  <span></span>
                </Form.Group>
                <Form.Group className="mb-4 d-flex" controlId="phone">
                  <Form.Label className="fw-bold text-nowrap m-0 mt-2">電話*</Form.Label>
                  <div className="d-flex flex-column flex-grow-1 ms-3">
                    <Form.Control
                      name="phone"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                      isInvalid={!!formik.errors.phone}
                      size="sm"
                      type="text"
                      placeholder="抽獎聯繫用"
                    />
                    <Form.Control.Feedback type="invalid">{formik.errors.phone}</Form.Control.Feedback>
                  </div>
                </Form.Group>
                <Form.Group className="mb-4 d-flex" controlId="email">
                  <Form.Label className="fw-bold text-nowrap m-0 mt-2">Email*</Form.Label>
                  <div className="d-flex flex-column flex-grow-1 ms-3">
                    <Form.Control
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      isInvalid={!!formik.errors.email}
                      size="sm"
                      type="text"
                      placeholder="抽獎聯繫用"
                    />
                    <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                  </div>
                </Form.Group>
                <Form.Group className="mb-4 d-flex flex-column position-relative" controlId="content">
                  <Form.Label className="fw-bold text-nowrap">{`我的${FORM_CONTENT[contentType].title}`}*</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={8}
                    name="content"
                    onChange={formik.handleChange}
                    value={formik.values.content}
                    isInvalid={!!formik.errors.content}
                    size="sm"
                    type="text"
                    placeholder={FORM_CONTENT[contentType].placeholder}
                  />
                  <div className="note position-absolute bottom-0 end-0 p-2">
                    {formik.values.content.length}/{CONTENT_MAX}
                  </div>
                  <Form.Control.Feedback type="invalid">{formik.errors.content}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4 d-flex flex-column" controlId="avatar">
                  {croppedImage ? (
                    <div className="d-flex flex-column align-items-center">
                      <Image className="avatar" src={URL.createObjectURL(croppedImage)} alt="裁切圖片" />
                      <br />
                      <Button onClick={onImageCropReset} className="button">
                        重新上傳
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Form.Control
                        className="image"
                        name="image"
                        onChange={onFileChange}
                        type="file"
                        accept="image/png, image/jpeg"
                        isInvalid={!!formik.errors.image}
                        size="sm"
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.image}</Form.Control.Feedback>
                    </div>
                  )}
                </Form.Group>
                <Form.Group className="agree mb-4 d-flex flex-column" controlId="agree">
                  <p className="notice">
                    您的投稿將於24小時內審核，若無危害善良風俗，及符合上述引導問題之範圍，則將通過發佈。
                  </p>
                  <Form.Check
                    name="agree"
                    label="我已經閱讀並同意「活動個資與授權條款」"
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.agree}
                    feedback={formik.errors.agree}
                    inline
                  />
                </Form.Group>
                <Accordion id="submit-form-agree-rules">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="header">活動個資與授權條款</Accordion.Header>
                    <Accordion.Body className="body">
                      <h6>個人資料蒐集處理利用暨著作授權利用同意書</h6>
                      <p>
                        本人為參與新北市政府文化局（下稱「新北市文化局」）舉辦之「2021
                        新北市社區營造成果展」（下稱「本活動」），同意新北市文化局及其他為新北市文化局規劃、執行本活動之第三人（下合稱「活動團隊」），得為規劃、執行本活動之目的，蒐集、處理及利用本人提供之個人資料：
                      </p>
                      <ol>
                        <li>蒐集之個人資料類別如本活動資料上傳網頁（https://meet-newwwwtaipei.life/#story ）所示。</li>
                        <li>
                          個人資料利用之期間為民國（下同）110年10月1日至110年12月30日或本活動結案（以孰晚者），利用之地區為全球各地。本人之電話、電子信箱將作為本活動內部行政使用，包括但不限於聯繫本人、核對本人身份等；本人於本活動資料上傳網頁所提供之其他與活動相關之個人資料，除活動團隊內部行政使用外，亦將公開予大眾知悉。
                        </li>
                        <li>本人若欲行使個人資料保護法第三條之權利，得聯絡以下電郵：service @rollinginlife.tw。</li>
                        <li>如本人不提供個人資料予活動團隊，將無法參與本活動。</li>
                      </ol>

                      <p>此外，本人亦同意以下條款內容，以利活動團隊利用本人提供之照片、檔案、文字及其他相關資料：</p>

                      <ol>
                        <li>
                          本人無償授權活動團隊於110年10月1日至110年12月30日，為規劃、執行本活動之目的，在全球各地利用本人提供之照片、檔案、文字、資訊及其他著作或內容。
                        </li>
                        <li>
                          授權內容
                          <ol type="A">
                            <li>
                              本人授權活動團隊利用之標的如下：
                              <ol type="i">
                                <li>本人提供予活動團隊之照片、檔案；</li>
                                <li>本人提供予活動團隊之文字等語言著作、文字著作，與活動有關之一切說明內容；及</li>
                                <li>本人於本活動資料上傳網頁上傳、填寫之一切內容。</li>
                              </ol>
                            </li>
                            <li>
                              活動團隊得以任何方式利用本人之著作，包括但不限於重製、改作、編輯、公開發表、公開上映、公開傳輸、公開播送、公開演出、公開口述、公開展示、散布等，且利用之場合或平台並無限制，包括但不限於線上網站及實體展覽。
                            </li>
                            <li>
                              除本人之電話及電子信箱外，本人透過本活動資料上傳網頁提供予活動團隊之照片、檔案、文字、資訊或其他內容，以及本人另以其他方式提供有關活動之一切內容，本人皆同意活動團隊得將該等內容以任何方式公開揭露，包括但不限於揭露於線上網站及實體展覽。
                            </li>
                            <li>
                              因本人提供之照片、檔案、文字、資訊或其他內容將由活動團隊經改作編輯後上傳及儲存於網路，該等內容將持續於網路儲存、公開至本活動結案止。
                            </li>
                          </ol>
                        </li>
                        <li>
                          本人擔保，本人提供活動團隊利用之著作已合法取得所有相關之權利，並無侵權之情事。若提供予活動團隊之照片、檔案、文字、資訊或其他內容，涉及第三人之權利者，本人應合法取得其授權，供活動團隊於本同意書之範圍內使用。若活動團隊因利用本人提供之著作或其他內容而受第三人為任何主張或請求，本人應向活動團隊負損害賠償之責，賠償範圍包括合理之律師費、訴訟費。
                        </li>
                        <li>
                          若活動團隊因利用本人提供之照片、檔案、文字或資訊而受有任何損害，本人應向活動團隊負損害賠償責任。
                        </li>
                        <li>本人同意不向活動團隊行使著作人格權。</li>
                        <li>
                          若本人提供之資訊有誤，致本人無法參與本活動、活動團隊無法聯繫本人、活動團隊公開之資訊有誤或其他類似情事，本人不得向活動團隊為任何主張或請求。
                        </li>
                        <li>
                          活動團隊有審核本人提供之照片、檔案、文字或資訊之權利，活動團隊得決定是否利用、公開本人提供之前述內容，並得將本人提供之前述內容從網路或任何載體上移除，本人不得向活動團隊為任何主張或請求。
                        </li>
                        <li>本同意書一部分無效，不影響其他部分之效力。</li>
                        <li>
                          本同意書之解釋適用，以中華民國法律為準據法。若因本同意書之履行或本活動之執行有任何爭議，本人同意以臺灣臺北地方法院為第一審管轄法院。
                        </li>
                      </ol>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <br />
                <div className="text-center">
                  <Button onClick={onClose} className="button mx-2">
                    關閉視窗
                  </Button>
                  <Button onClick={onPreviewTab} className="button mx-2">
                    預覽貼文
                  </Button>
                </div>
              </Form>
            </Tab.Pane>
            <Tab.Pane eventKey={TabType.Preview}>
              {tabType === TabType.Preview && (
                <>
                  <h4 className="title fs-4 fw-bold text-center mb-4">預覽貼文</h4>
                  <div className="mx-auto" style={{ maxWidth: '250px' }}>
                    {croppedImage ? (
                      <StoryItem
                        image={URL.createObjectURL(croppedImage)}
                        type={formik.values.type}
                        name={formik.values.nickname}
                        location={formik.values.district}
                        score={parseInt(formik.values.rating)}
                        content={formik.values.content}
                      />
                    ) : (
                      <div>抱歉，出了一些問題</div>
                    )}
                  </div>
                  <div className="text-center">
                    <p>送出後便無法修改，請再次確認內容是否無誤。</p>
                    <Button onClick={onFormTab} className="button mx-2">
                      回到表格
                    </Button>
                    <Button onClick={formik.submitForm} className="button mx-2">
                      確認送出
                    </Button>
                  </div>
                </>
              )}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Dialog>
      <Dialog show={imageCropDialogShow} onClose={onImageCropDialogClose}>
        <h4 className="title fs-4 fw-bold text-center mb-4">圖片裁切</h4>
        {/* ref: https://dev.to/shaerins/cropping-and-resizing-images-in-react-360a */}
        {imageSrc && <ImageCropper imageSrc={imageSrc} onChange={setCroppedImage} />}
        <br />
        <div className="text-center">
          <Button onClick={onImageCropFinished} className="button mx-2">
            確定
          </Button>
          <Button onClick={onImageCropDialogClose} className="button mx-2">
            取消
          </Button>
        </div>
      </Dialog>
      <Dialog show={isLoading}>
        <Spinner animation="border" role="status" className="mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Dialog>
    </>
  );
};

export default SubmitForm;
