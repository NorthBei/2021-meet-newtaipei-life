import './About.scss';

import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import LabelTag from '@/components/LabelTag';
import NewTaipeiMap from '@/components/NewTaipeiMap';
import homeData from '@/data/home';
import fbIcon from '@/images/icon-facebook.svg';

const about = homeData.section.about;

const AboutSection = () => {
  return (
    <section id="about">
      <div className="film-wrapper">
        <video className="w-100" autoPlay loop muted playsInline controls>
          <source src={about.video.url} type={about.video.type} />
          Your browser does not support the HTML5 video.
        </video>
      </div>
      <div className="introduction mt-md-5 mt-4 pt-1">
        <LabelTag color="red" size="lg">
          「最貼近地方生活」的社造成果展！
        </LabelTag>
        <p className="content mt-4">
          2021年對每個人來說，都是充滿轉折、改變的一年。但也因為這個轉變，讓我們有機會嘗試一些新的可能性！面臨許多未知和變動的社造團隊們，許多活動和交流轉至線上，雖然需克服許多困難，但也因此增加了跨區社造團隊交流和連結的機會。
        </p>
        <p className="content">
          今年的新北社造成果展，以「新新厝邊生活 Meet Newwww Taipei
          Lifestyle」為主題，共10場線上體驗及2場實體的跨社區共創小旅行，期待與大家一起用「新的視角」、「新的距離」、「新的形式」來探索體驗新北社區各種「新奇的生活方式」。在各種想法的交流碰撞下，一起對自己的生活產生「新的行動」！
        </p>
        <div className="content d-flex align-items-center">
          <span className="me-2">了解更多新新生活</span>
          <a
            className="d-inline-flex align-items-center"
            href={about.newTaipeiCityCommunity}
            target="_blank"
            rel="noreferrer"
          >
            <Image src={fbIcon.src} alt="Facebook" width="28" />
            <span className="ms-1 fw-bold">新北社造中心</span>
          </a>
        </div>
      </div>
      <Row className="mt-5">
        <Col className="mb-md-0 mb-4">
          <NewTaipeiMap />
        </Col>
      </Row>
    </section>
  );
};

export default AboutSection;
