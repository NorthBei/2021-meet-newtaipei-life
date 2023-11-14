'use client';

import './page.scss';

import React, { useCallback, useState } from 'react';
import { Waypoint } from 'react-waypoint';

import BaseSection from '@/components/BaseSection';
import Footer from '@/components/Footer';
import { offlineEvents, onlineEvents } from '@/data/events';
import aboutSubtitle from '@/images/about-side-image.svg';
import offlineSubtitle from '@/images/offline-side-image.svg';
import onlineSubtitle from '@/images/online-side-image.svg';
import storySubtitle from '@/images/story-side-image.svg';
import About from '@/sections/home/About';
import Floating from '@/sections/home/Floating';
import Fold from '@/sections/home/Fold';
import Offline from '@/sections/home/Offline';
import Online from '@/sections/home/Online';
import StoryList from '@/sections/home/StoryList';

function Home() {
  const [isOutFold, setIsOutFold] = useState(false);

  const onEnterFoldSection = useCallback(() => setIsOutFold(false), []);

  const onLeaveFoldSection = useCallback(() => setIsOutFold(true), []);

  const onPositionChange = useCallback((e: Waypoint.CallbackArgs) => {
    setIsOutFold(e.currentPosition === 'above');
  }, []);

  return (
    <main id="app">
      <Floating isOutFold={isOutFold} />
      <Waypoint onPositionChange={onPositionChange} onEnter={onEnterFoldSection} onLeave={onLeaveFoldSection}>
        <div>
          <Fold />
        </div>
      </Waypoint>
      <BaseSection id="about-wrapper" image={aboutSubtitle.src} alt="about subtitle">
        <About />
      </BaseSection>
      <BaseSection id="online-wrapper" image={onlineSubtitle.src} alt="online subtitle">
        <Online events={onlineEvents} />
      </BaseSection>
      <BaseSection id="offline-wrapper" image={offlineSubtitle.src} alt="offline subtitle">
        <Offline events={offlineEvents} />
      </BaseSection>
      <BaseSection id="story-wrapper" image={storySubtitle.src} alt="story subtitle">
        <StoryList />
      </BaseSection>
      <section className="py-md-4 py-0 mb-md-0 mb-5">
        <Footer />
      </section>
    </main>
  );
}

export default Home;
