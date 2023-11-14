'use client';

import './event.scss';

import clsx from 'clsx';
import React from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';

import { Event, EventCategoryValue } from '@/data/events';
import Banners from '@/sections/event/Banners';
import BasicInfo from '@/sections/event/BasicInfo';
import CommunityInfo from '@/sections/event/CommunityInfo';
import EventInfo from '@/sections/event/EventInfo';
import Floating from '@/sections/event/Floating';
import MobileNav from '@/sections/event/MobileNav';
import PromotionCard from '@/sections/event/PromotionCard';

type EventProps = {
  event: Event;
};

export default function Event(props: EventProps) {
  const { event } = props;

  const isOnline = event.category.value === EventCategoryValue.Online;

  return (
    <main id="app">
      <MobileNav />
      <Container id="event" className="position-relative mb-4 px-md-0 px-4">
        <Floating />
        <Banners images={event.banners} />
        <Row className="mx-md-5 mb-5 mt-md-4 mt-3">
          <Col lg="8" md="7" className="pe-lg-5">
            <BasicInfo event={event} isOnline={isOnline} />
            <Tabs
              id="intro-tabs"
              defaultActiveKey="event-intro"
              className={clsx('intro-tabs mt-4 d-flex', event.district.color)}
            >
              <Tab eventKey="event-intro" title="活動介紹">
                <EventInfo intro={event.eventIntro} />
              </Tab>
              <Tab eventKey="community-intro" title="社區介紹">
                <CommunityInfo info={event.communityIntro} color={event.district.color} />
              </Tab>
            </Tabs>
          </Col>
          <Col lg="4" md="5">
            <PromotionCard event={event} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
