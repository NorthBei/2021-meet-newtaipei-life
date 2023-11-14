import './Offline.scss';

import Link from 'next/link';
import React from 'react';
import { Col, Image, Ratio, Row } from 'react-bootstrap';

import InfoImage from '@/components/InfoImage';
import LabelTag from '@/components/LabelTag';
import { Event } from '@/data/events';
import locationIcon from '@/images/icon-location.svg';
import moonIcon from '@/images/icon-moon.svg';
import sunIcon from '@/images/icon-sun.svg';
import offlineBanner from '@/images/offline-banner.jpg';
import importImage from '@/utils/importImage';

type OfflineSectionProps = {
  events: Event[];
};

const OfflineSection = (props: OfflineSectionProps) => {
  const { events } = props;
  return (
    <>
      <section id="offline">
        <section className="mt-md-5 mt-3">
          <div className="mt-md-5 mt-0 full-width-image">
            <Ratio aspectRatio={435 / 1440}>
              <Image src={offlineBanner.src} alt="banner" />
            </Ratio>
          </div>
        </section>
        <section className="mt-5 ms-md-5 ms-0">
          {events.map((event, i) => {
            return (
              <Link href={event.meta.path} key={i}>
                <Row className="event-item mt-4">
                  <Col lg="5" md="12" className="mb-2">
                    <InfoImage
                      src={importImage(event.home.image)}
                      ratio={67}
                      label={`${event.district.type}的社區｜${event.district.name}`}
                      labelClass="d-md-none"
                      color={event.district.color}
                      tags={event.tags}
                      status={event.status}
                      isTagsShowOnMobile={true}
                    />
                  </Col>
                  <Col lg="7" md="12" className="d-flex flex-column px-md-2">
                    <div className="d-md-block d-none">
                      <LabelTag color={event.district.color}>
                        {event.district.type}的社區｜{event.district.name}
                      </LabelTag>
                    </div>
                    <div className="label mt-1">實體活動</div>
                    <div className="title flex-grow-1 fw-bold">{event.title}</div>
                    <div className="datetime my-1 d-inline-flex align-items-center">
                      <span>
                        {event.date} ({event.day})&nbsp;&nbsp;
                      </span>
                      <span className="d-inline-flex align-items-center">
                        <Image
                          className="me-2"
                          src={event.timeType === 'sun' ? sunIcon.src : moonIcon.src}
                          alt="時間"
                          width="18"
                        />
                        {event.time}
                      </span>
                    </div>
                    <div className="location d-flex align-items-center">
                      <Image className="me-2" src={locationIcon.src} alt="地點" width="18" />
                      {event.location}
                    </div>
                    <div className="pricing fw-bold my-1">費用｜{event.price}</div>
                  </Col>
                </Row>
              </Link>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default OfflineSection;
