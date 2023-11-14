import './Fold.scss';

import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

import CuteCalendar from '@/components/CuteCalendar';
import time from '@/images/home-date.png';
import logoDesktop from '@/images/logo-desktop.png';
import logoMobile from '@/images/logo-mobile-home.png';
import slide1Desktop from '@/images/slider-01.jpeg';
import slide2Desktop from '@/images/slider-02.jpeg';
import slide3Desktop from '@/images/slider-03.jpeg';
import slide4Desktop from '@/images/slider-04.jpeg';
import slide5Desktop from '@/images/slider-05.jpeg';
import slide6Desktop from '@/images/slider-06.jpeg';
import slide1Mobile from '@/images/slider-mobile-01.jpg';
import slide2Mobile from '@/images/slider-mobile-02.jpg';
import slide3Mobile from '@/images/slider-mobile-03.jpg';
import slide4Mobile from '@/images/slider-mobile-04.jpg';
import slide5Mobile from '@/images/slider-mobile-05.jpg';
import slide6Mobile from '@/images/slider-mobile-06.jpg';

const FoldSection = () => {
  return (
    <section id="fold">
      <section id="content">
        <div className="logo-desktop d-md-block d-none">
          <Image className="w-100" src={logoDesktop.src} alt="logo" width="250" fluid />
        </div>
        <div className="logo-mobile">
          <Image className="w-100" src={logoMobile.src} alt="logo" width="450" fluid />
        </div>
        <div className="calendar">
          <CuteCalendar />
        </div>
        <div className="event-date">
          <Image src={time.src} alt="活動時間" className="h-100" height="80" fluid />
        </div>
        <div className="slide-wrapper h-100">
          <Carousel id="home-slide" className="h-100 w-100" controls={false}>
            <Carousel.Item>
              <Image
                className="slide-image d-md-block d-none"
                src={slide1Desktop.src}
                alt="slide1"
                loading="eager"
                fluid
              />
              <Image
                className="slide-image d-md-none d-block"
                src={slide1Mobile.src}
                alt="slide1"
                loading="eager"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="slide-image d-md-block d-none"
                src={slide2Desktop.src}
                alt="slide2"
                loading="eager"
                fluid
              />
              <Image
                className="slide-image d-md-none d-block"
                src={slide2Mobile.src}
                alt="slide1"
                loading="eager"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="slide-image d-md-block d-none"
                src={slide3Desktop.src}
                alt="slide3"
                loading="eager"
                fluid
              />
              <Image
                className="slide-image d-md-none d-block"
                src={slide3Mobile.src}
                alt="slide1"
                loading="eager"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="slide-image d-md-block d-none"
                src={slide4Desktop.src}
                alt="slide4"
                loading="eager"
                fluid
              />
              <Image
                className="slide-image d-md-none d-block"
                src={slide4Mobile.src}
                alt="slide1"
                loading="eager"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="slide-image d-md-block d-none"
                src={slide5Desktop.src}
                alt="slide5"
                loading="eager"
                fluid
              />
              <Image
                className="slide-image d-md-none d-block"
                src={slide5Mobile.src}
                alt="slide1"
                loading="eager"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="slide-image d-md-block d-none"
                src={slide6Desktop.src}
                alt="slide6"
                loading="eager"
                fluid
              />
              <Image
                className="slide-image d-md-none d-block"
                src={slide6Mobile.src}
                alt="slide1"
                loading="eager"
                fluid
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </section>
  );
};

export default FoldSection;
