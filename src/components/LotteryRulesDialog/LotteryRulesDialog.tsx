import './LotteryRulesDialog.scss';

import React from 'react';
import { Button } from 'react-bootstrap';

import Dialog from '@/components/Dialog/Dialog';

type LotteryRulesDialogProps = {
  show: boolean;
  onClose: () => void;
};

const LotteryRulesDialog = (props: LotteryRulesDialogProps) => {
  const { show, onClose } = props;
  return (
    <Dialog id="lottery-rules" show={show} onClose={onClose}>
      <h4 className="title fs-4 fw-bold text-center mb-4">上傳故事抽好禮</h4>
      <p>新新故事牆，抽獎獎品種類豐富、心意滿點！精選了來自新北各地，最在地又多元的新新社區精美小物，好康搶先看：</p>
      <ul>
        <li>新莊：全境平安紅包（遊境感知所提供！），限量3名。</li>
        <li>新莊：鹹光餅皂（遊境感知所提供！），限量2名。</li>
        <li>新莊：《新莊騷》地方誌（好滙造事提供！），限量4名。</li>
        <li>泰山：手編竹缽（圓夢藝程阿員姊提供！），限量1名。</li>
        <li>泰山：手編竹鈴鐺（圓夢藝程阿員姊提供！），限量1名。</li>
        <li>坪林：手工藍染扇（坪林故事採集提供！），限量3名。</li>
        <li>平溪：礦工帽造型（平溪阿賢提供！），限量5名。</li>
        <li>中和：越式酸菜（小巢的天空提供！），限量1名。</li>
        <li>中和：越式鹹檸檬（小巢的天空提供！），限量1名。</li>
        <li>中和：越式芋頭豆腐乳（小巢的天空提供！），限量1名。</li>
        <li>三芝：絹印提袋＋紅茶（解析度設計提供！），限量3名。</li>
      </ul>
      <br />
      <h4 className="title fs-4 fw-bold text-center my-4">抽獎辦法</h4>
      <h6 className="subtitle">一、活動目的</h6>
      <p className="content">
        新北市是全臺具有豐富地景的城市，不僅幅員遼闊，還包含山、海、城三種不同社區樣貌，為了鼓勵民眾踴躍參與「2021年新北社造成果展：新新厝邊生活」並分享新北市各地的不同生活，因此舉辦本抽獎活動，邀請民眾在官網中投稿個人的「新新生活故事」！即日起至活動截止日，只要投稿一則故事並通過審核，就擁有抽獎機會！獎品數量有限，投稿越多、中獎機率越大喔！
      </p>
      <h6 className="subtitle">二、主辦單位</h6>
      <p>新北市政府</p>
      <h6 className="subtitle">三、承辦單位</h6>
      <p>新北市政府文化局</p>
      <h6 className="subtitle">四、參加資格</h6>
      <p>不限年齡皆可參加新新故事投稿，抽獎資格為符合投稿規範且審核通過者。</p>
      <h6 className="subtitle">五、活動日期</h6>
      <p>即日起至2021年11月15日24時(活動截止時間)</p>
      <h6 className="subtitle">六、抽獎規則</h6>
      <p>
        活動期間內，只要上傳投稿一則新新故事，即獲得一次抽獎資格，多投稿多中獎！惟每一抽獎資格僅限中獎一次，若有相同內容重複投稿者，取消其參與資格。
      </p>
      <h6 className="subtitle">七、活動獎品</h6>
      <p>本次社造團隊之相關精美小物，種類多樣，限量共 25 份。</p>
      <h6 className="subtitle">八、抽獎辦法</h6>
      <ul>
        <li>
          執行團隊於11月15日24時活動結束後次日進行抽獎，並將得獎名單公布於《
          <a href="https://www.facebook.com/community.newtaipeicity" className="text-decoration-underline">
            新北市社區營造輔導中心
          </a>
          》粉絲專頁，同步以電子郵件通知獲獎人，抽獎過程不對外公開但全程錄影。
        </li>
        <li>抽獎由符合資格之參加者中隨機抽出，每人限中獎一次，若有重複中獎之情況發生，則以第一次中獎之獎項為準。</li>
        <li>寄送辦法：寄送獎項僅限台灣地區（含離島）。國外地區寄送郵務，由獲獎者自行負擔郵寄費用。</li>
      </ul>
      <h6 className="subtitle">九、得獎須知</h6>
      <ul>
        <li>獲獎者若因填寫資料不完整、不正確以致無法聯絡及寄送，視同自動放棄，恕不另行通知。</li>
        <li>
          本活動之獎品以實物為準，不得要求更換顏色、規格、轉讓或折換成現金。獎項經寄出後，如有郵務遺失、盜領、自行拋棄、毀損等，恕不補發獎品。
        </li>
      </ul>
      <h6 className="subtitle">十、注意事項</h6>
      <ul>
        <li>
          本活動因不可抗力之特殊原因無法執行時，主辦單位有權決定取消、終止、修改或暫停。參加活動之民眾視同承認本規定之效力，如有未盡事宜，主辦單位保留修改、終止、變更活動內容細節之權利，且不另行通知。
        </li>
        <li>
          主辦單位就本活動參加者之資格，保有審查之權利，參加者不得以任何非法、欺騙、不誠實、不公平、不適當或其他技術性作弊方式取抽獎資格，或從事任何干擾其他參加者或本活動之情事，違反者係屬違反本辦法，主辦單位有權立即取消其參加或中獎資格，若因而造成主辦單位之損失，應負賠償之責任。
        </li>
        <li>
          如有任何因電腦、網路、技術或不可歸責於主辦單位之事由，而使參加者所上傳登錄之資料有遲延、遺失、錯誤、無法辨識或毀損之情況時，主辦單位不負任何法律責任，參加者與獲獎者亦不得異議。
        </li>
        <li>
          基於宣傳推廣之目的，參加者需同意無償授權主辦單位將投稿作品(含著作權、重製權、肖像權、改作權、公開口述權、公開播送權、公開上映權、公開演出權、公開傳輸權、公開展示權、編輯權、散布權)，作為新新厝邊生活相關活動推廣使用
          (包含但不限於報導、網站嵌入、成果展示等相關活動推廣用途)且不限使用時間。
        </li>
      </ul>
      <br />
      <div className="text-center">
        <Button onClick={onClose} className="button">
          我了解哩
        </Button>
      </div>
    </Dialog>
  );
};

export default LotteryRulesDialog;
