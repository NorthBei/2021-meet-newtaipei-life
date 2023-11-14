import './StoryList.scss';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Col, Image, Ratio, Row } from 'react-bootstrap';
import { Flipped, Flipper } from 'react-flip-toolkit';
import { Waypoint } from 'react-waypoint';

import ChipRadio from '@/components/ChipRadio';
import LotteryRulesDialog from '@/components/LotteryRulesDialog';
import StoryItem from '@/components/StoryItem';
import SubmitFormDialog from '@/components/SubmitFormDialog';
import storyBanner from '@/images/story-banner.jpg';
import { BOOTSTRAP_MOBILE_WIDTH } from '@/modules/const';
import * as firebase from '@/modules/firebase';
import { ContentType, FORM_CONTENT } from '@/types';

const StoryCategoryList = [
  { id: 'all', label: '全部' },
  { id: ContentType.Idea, label: FORM_CONTENT[ContentType.Idea].title },
  { id: ContentType.Events, label: FORM_CONTENT[ContentType.Events].title }
];

const StoryList = () => {
  const [type, setType] = useState(StoryCategoryList[0].label);
  const [storys, setStorys] = useState<firebase.StoryDoc[]>([]);
  const [buttonWrapperActiveClass, setButtonWrapperActiveClass] = useState('');
  const [isSubmitFormShow, setSubmitFormShow] = useState(false);
  const [isLotteryRulesShow, setLotteryRulesShow] = useState(false);

  useEffect(() => {
    firebase.getStories().then(setStorys);
  }, []);

  const storyList = useMemo(() => {
    return storys.filter((story) => type === StoryCategoryList[0].label || story.type === type);
  }, [storys, type]);

  const showSubmitForm = useCallback(() => setSubmitFormShow(true), []);
  const showLotteryRule = useCallback(() => setLotteryRulesShow(true), []);
  const closeModal = useCallback(() => {
    setSubmitFormShow(false);
    setLotteryRulesShow(false);
  }, []);

  const onTypeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setType(e.target.value), []);

  const onEnterStorySection = useCallback(() => {
    if (window.innerWidth > BOOTSTRAP_MOBILE_WIDTH) return;
    setButtonWrapperActiveClass('show');
  }, []);

  const onLeaveStorySection = useCallback(() => {
    if (window.innerWidth > BOOTSTRAP_MOBILE_WIDTH) return;
    setButtonWrapperActiveClass('');
  }, []);

  return (
    <>
      <SubmitFormDialog show={isSubmitFormShow} onClose={closeModal} />
      <LotteryRulesDialog show={isLotteryRulesShow} onClose={closeModal} />
      <Waypoint onEnter={onEnterStorySection} onLeave={onLeaveStorySection}>
        <section id="story">
          <div className="mt-md-5 mt-3">
            <div className="mt-md-5 mt-0 full-width-image">
              <Ratio aspectRatio={435 / 1440}>
                <Image src={storyBanner.src} alt="banner" />
              </Ratio>
            </div>
          </div>
          <div className="mt-5 d-flex flex-column align-items-center">
            <div className="text-center">
              {StoryCategoryList.map((item) => {
                return (
                  <ChipRadio
                    key={item.id}
                    id={item.id}
                    name="type"
                    label={item.label}
                    value={item.label}
                    onChange={onTypeChange}
                    className="chip-radio me-2 mb-2"
                    checked={item.label === type}
                  />
                );
              })}
            </div>
            <div className="rules fw-bold text-md-center text-start mt-4 mb-4">
              分享你的新北生活，還有你想在生活中發起有趣的改變行動！
              <br className="d-md-block d-none" />
              即日起至11/15，上傳並依據規則通過審核，一篇即可獲得一次抽獎機會！
            </div>
            <div className={`action-button-wrapper d-flex ${buttonWrapperActiveClass}`}>
              <button className="action-button red" onClick={showSubmitForm}>
                我要投稿
              </button>
              <span className="d-md-inline-block d-none mx-1"></span>
              <button className="action-button green" onClick={showLotteryRule}>
                抽獎辦法
              </button>
            </div>
          </div>
          <Flipper flipKey={storyList.map((story) => story.id).join('')}>
            <Row className="mt-md-5 mt-0 pt-md-0 pt-2 position-relative">
              {storyList.map((story) => {
                return (
                  <Flipped key={story.id} flipId={story.id}>
                    <Col lg="4" xs="6" className="mb-4" key={story.id}>
                      <StoryItem
                        image={story.image}
                        type={story.type}
                        name={story.nickname}
                        location={story.district}
                        score={parseInt(story.rating)}
                        content={story.content}
                      />
                    </Col>
                  </Flipped>
                );
              })}
            </Row>
          </Flipper>
        </section>
      </Waypoint>
    </>
  );
};

export default StoryList;
