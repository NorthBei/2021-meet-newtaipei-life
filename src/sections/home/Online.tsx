import './Online.scss';

import Link from 'next/link';
import React, { useCallback, useMemo, useState } from 'react';
import { Col, Form, Image, Ratio, Row } from 'react-bootstrap';

import ChipRadio from '@/components/ChipRadio';
import InfoImage from '@/components/InfoImage';
import { Event, EventTimeType } from '@/data/events';
import homeData from '@/data/home';
import moonIcon from '@/images/icon-moon.svg';
import sunIcon from '@/images/icon-sun.svg';
import onlineBanner from '@/images/online-banner.png';
import importImage from '@/utils/importImage';

const formInitStatus = {
  date: '全部',
  time: '全天',
  type: '全部'
};

type OnlineSectionProps = {
  events: Event[];
};

type ExtendEvent = {
  className: string;
} & Event;

const OnlineSection = (props: OnlineSectionProps) => {
  const { events } = props;
  const [date, setDate] = useState(formInitStatus.date);
  const [time, setTime] = useState(formInitStatus.time);
  const [type, setType] = useState(formInitStatus.type);

  const onlineEvents: ExtendEvent[] = useMemo(() => {
    return events.map((event) => {
      const isDateValid = date === formInitStatus.date || event.date === date;
      const isTimeValid = time === formInitStatus.time || event.home.time === time;
      const isTypeValid = type === formInitStatus.type || event.home.theme.includes(type);
      return {
        ...event,
        className: isDateValid && isTimeValid && isTypeValid ? '' : 'd-none'
      };
    });
  }, [events, date, time, type]);

  const onDateChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => setDate(e.target.value), []);
  const onTimeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setTime(e.target.value), []);
  const onTypeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setType(e.target.value), []);

  return (
    <section id="online">
      <section className="mb-md-4 mt-md-5 mt-3">
        <div className="mt-md-5 mt-0 full-width-image">
          <Ratio aspectRatio={435 / 1440}>
            <Image src={onlineBanner.src} alt="banner" />
          </Ratio>
        </div>
      </section>
      <Form id="filter" className="my-md-5 my-4">
        <div className="mb-md-4 d-md-inline-block d-none"></div>
        <div className="d-flex flex-column flex-md-row align-items-start">
          <span className="title mt-md-1 mt-0 me-2 mb-md-0 mb-2 text-nowrap">主題分類</span>
          <div>
            {homeData.section.online.filter.types.map((item) => {
              return (
                <ChipRadio
                  key={item.id}
                  id={item.id}
                  name="type"
                  value={item.label}
                  label={item.label}
                  color={item.color}
                  className="chip-radio me-2 mb-2"
                  onChange={onTypeChange}
                  checked={item.label === type}
                />
              );
            })}
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-md-center align-items-start mt-3">
          <span className="title me-2 mb-md-0 mb-2 text-nowrap">體驗時間</span>
          <div className="d-flex align-items-md-center align-items-start flex-column flex-md-row w-100">
            <Form.Select className="date-select mb-md-0 mb-3" name="date" onChange={onDateChange} defaultValue={date}>
              {homeData.section.online.filter.date.map(({ label, value }) => {
                return (
                  <option key={value} value={value}>
                    {label}
                  </option>
                );
              })}
            </Form.Select>
            <Form.Group className="mx-md-0 mx-auto time-select-list d-flex">
              {homeData.section.online.filter.time.map((timeText, i) => {
                return (
                  <Form.Check
                    key={timeText}
                    className="time-select"
                    type="radio"
                    id={`time${i}`}
                    name="time"
                    label={timeText}
                    value={timeText}
                    onChange={onTimeChange}
                    checked={timeText === time}
                  />
                );
              })}
            </Form.Group>
          </div>
        </div>
      </Form>
      <Row className="pt-md-0 pt-2">
        {onlineEvents.map((event, i: number) => {
          return (
            <Col className={`mb-4 ${event.className}`} lg="4" xs="6" key={i}>
              <Link href={event.meta.path}>
                <section className="event-item">
                  <InfoImage
                    src={importImage(event.home.image)}
                    ratio="1x1"
                    label={`${event.district.type}的社區｜${event.district.name}`}
                    color={event.district.color}
                    tags={event.tags}
                    tagsClass="justify-content-end justify-content-xl-center"
                    status={event.status}
                    isTagsShowOnMobile={false}
                  />

                  <div className="info px-2">
                    <div className="label mt-2">線上活動</div>
                    <div className="title fw-bold">{event.title}</div>
                    <div className="date my-1">
                      {event.date} ({event.day})
                    </div>
                    <div className="time d-flex align-items-center">
                      <Image
                        className="me-2"
                        src={event.timeType === EventTimeType.Sun ? sunIcon.src : moonIcon.src}
                        alt="日時間"
                        width="15"
                      />
                      {event.time}
                    </div>
                    <div className="pricing fw-bold  my-1">費用｜{event.price}</div>
                  </div>
                </section>
              </Link>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default OnlineSection;
