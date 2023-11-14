import './PromotionCard.scss';

import React from 'react';
import { Image } from 'react-bootstrap';

import CopyText from '@/components/CopyText';
import { Event, EventStatus } from '@/data/events';
import messengerIcon from '@/images/icon-messenger.svg';
import shareIcon from '@/images/icon-share.svg';
import { MESSENGER_URL } from '@/modules/const';

type PromotionCardProps = {
  event: Event;
};

const PromotionCard = (props: PromotionCardProps) => {
  const { event } = props;
  return (
    <section id="side-info">
      <div id="participate-card" className="d-md-block d-none">
        <div className={`roof-title fw-bold ${event.district.color}`}>體驗新新生活</div>
        <div className="content p-4">
          <div className="fw-bold">
            {event.category.text}｜{event.title}
          </div>
          <div className="my-1">
            {event.date} ({event.day}) {event.time} ({event.timeZone})
          </div>
          <br />
          <div className="fw-bold">費用 | {event.price}</div>
          <div className="text-center mt-4">
            {(() => {
              switch (event.status) {
                case EventStatus.SoldOut:
                  return <span className="link-button soldout">已售完</span>;
                case EventStatus.Finished:
                  return <span className="link-button soldout">已結束</span>;
                case EventStatus.Apply:
                  return (
                    <a
                      href={event.applyUrl}
                      className={`link-button ${event.district.color}`}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      立即報名
                    </a>
                  );
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </div>
      <div id="action-buttons" className="d-md-flex d-none justify-content-center mt-3">
        <CopyText direction="bottom">
          <button className="action-button d-flex align-items-center">
            <Image className="icon" src={shareIcon.src} alt="shareIcon" width="24" />
            <span className="ms-1">分享活動</span>
          </button>
        </CopyText>
        <a
          href={MESSENGER_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="action-button d-flex align-items-center"
        >
          <Image className="icon" src={messengerIcon.src} alt="messengerIcon" width="24" />
          <span className="ms-1">聯絡客服</span>
        </a>
      </div>
      {(() => {
        switch (event.status) {
          case EventStatus.SoldOut:
            return (
              <span id="participate-button" className="link-button soldout d-md-none d-block">
                已售完
              </span>
            );
          case EventStatus.Finished:
            return (
              <span id="participate-button" className="link-button soldout d-md-none d-block">
                已結束
              </span>
            );
          case EventStatus.Apply:
            return (
              <a
                id="participate-button"
                className={`${event.district.color} d-md-none d-block`}
                href={event.applyUrl}
                rel="noreferrer noopener"
              >
                立即報名
              </a>
            );
          default:
            return null;
        }
      })()}
    </section>
  );
};

export default PromotionCard;
