import './Banners.scss';

import React from 'react';
import { Carousel, Image, Ratio } from 'react-bootstrap';

import importImage from '@/utils/importImage';

type BannerProps = {
  images: string[];
};

const Banner = (props: BannerProps) => {
  const { images } = props;
  return (
    <>
      <div className="position-relative mb-3 mt-md-3 mt-1">
        <Ratio id="banner-carousel-ration" aspectRatio="21x9">
          <Carousel id="banner-carousel" className="position-absolute" variant="dark">
            {images.map((image, i) => {
              return (
                <Carousel.Item key={i}>
                  <Image className="slide-image" src={importImage(image)} alt={`slide${i}`} fluid />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Ratio>
      </div>
    </>
  );
};

export default Banner;
