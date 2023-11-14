import './BasicInfo.scss';

import Link from 'next/link';
import React from 'react';
import { Breadcrumb, Image } from 'react-bootstrap';

import Tags from '@/components/InfoImage/Tags';
import LabelTag from '@/components/LabelTag';
import UserIntro from '@/components/UserIntro';
import { Event } from '@/data/events';
import announcementIcon from '@/images/icon-announcement.svg';

type BasicInfoProps = {
  event: Event;
  isOnline: boolean;
};

const BasicInfo = (props: BasicInfoProps) => {
  const { event, isOnline } = props;
  return (
    <div id="basic-info">
      <Breadcrumb>
        <Link href="/" className="text-decoration-underline">
          新新厝邊生活
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/#${event.category.value}`} className="text-decoration-underline">
          {event.category.text}
        </Link>
        <span className="mx-2">/</span>
        {event.district.type}的社區
      </Breadcrumb>
      <LabelTag color={event.district.color}>
        {event.district.type}的社區｜{event.district.name}
      </LabelTag>
      <h1 className="text-level-1 my-3">
        {event.category.text}｜{event.title}
      </h1>
      <Tags list={event.tags} tagAlign="start" color={event.district.color} />
      {isOnline ? (
        <div className="announcement d-flex align-items-center my-md-3 my-4">
          <Image src={announcementIcon.src} alt="announcement" />
          <span className="ms-3">此活動為線上進行，配合社區防疫，在家遠距參與活動有趣又安心</span>
        </div>
      ) : (
        <div className="my-md-3 my-4"></div>
      )}
      <section className="d-inline-block mb-2">
        <span className="fw-bold">活動類型｜</span>
        {event.type}
        <br />
        <span className="fw-bold">活動費用｜</span>
        {event.price}
        <br />
        <span className="fw-bold">人數限制｜</span>最多{event.peopleLimit}人<br />
        <span className="fw-bold">適合年齡｜</span>
        {event.ageLimit}
        <br />
        <span className="fw-bold">活動時間｜</span>
        {event.date} ({event.day}) {event.time} ({event.timeZone})<br />
        <span className="fw-bold">報名截止｜</span>
        {event.endDate}
        <br />
        <span className="fw-bold">行程時間｜</span>
        {event.during}
        <br />
        {isOnline ? (
          <>
            <span className="fw-bold">活動平台｜</span>
            {event.location}
            <br />
          </>
        ) : (
          <>
            <span className="fw-bold">活動地點｜</span>
            {event.location}
            <br />
          </>
        )}
      </section>

      <section className="d-inline-block mt-2">
        <h2 className="text-level-2 my-3">新新嚮導</h2>
        {event.guide.map((guide, i) => {
          return <UserIntro key={i} avatar={guide.avatar} title={guide.title} intro={guide.intro} />;
        })}
      </section>
    </div>
  );
};

export default BasicInfo;
