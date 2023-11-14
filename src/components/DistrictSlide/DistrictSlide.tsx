import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './DistrictSlide.scss';

import clsx from 'clsx';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { Image, Ratio } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

import { SlideItem } from '@/data/districtSlides';
import importImage from '@/utils/importImage';

type DistrictSlideProps = {
  color: string;
  slides: SlideItem;
  isShow: boolean;
};

const DistrictSlide = (props: DistrictSlideProps) => {
  const { color, slides, isShow } = props;
  const [index, setIndex] = useState(0);

  const onChange = useCallback((index: number) => setIndex(index), []);

  return (
    <div
      id="mapinfo-slider-wrapper"
      className={clsx({
        'd-none': !isShow
      })}
    >
      <div className={clsx('roof-title py-2', color)}>
        {slides.type}的社區｜{slides.teams[index].district}
      </div>
      <Carousel
        className="carousel w-100"
        onChange={onChange}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        transitionTime={0}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
      >
        {slides.teams.map((team) => {
          return (
            <article className="d-flex flex-column" key={team.name}>
              <Ratio aspectRatio={2 / 3}>
                <Image className="position-absolute" src={importImage(team.image)} alt="社區計畫圖片" fluid />
              </Ratio>
              <span className="title fw-bolder mt-md-4 mt-3">【{team.name}】</span>
              <div className="p-md-4 p-3">
                <div className="subtitle text-start fw-bolder">計畫名稱｜{team.plan.title}</div>
                <p className="content text-start mb-md-4 my-3">{team.plan.intro}</p>
                {team.link && (
                  <Link
                    className={clsx('d-inline-block link-button', color)}
                    href={team.link}
                    target={team.isFacebookLink ? '_blank' : '_self'}
                    rel="noreferrer noopener"
                  >
                    體驗新新生活
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </Carousel>
    </div>
  );
};

export default DistrictSlide;
