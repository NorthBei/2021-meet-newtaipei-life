import './StoryItem.scss';

import React from 'react';
import { Image, Ratio } from 'react-bootstrap';

import Rating from '@/components/Rating';
import locationIcon from '@/images/icon-location.svg';

type StoreItemProps = {
  image: string;
  type: string;
  name: string;
  location: string;
  score: number;
  content: string;
};

const StoryItem = (props: StoreItemProps) => {
  const { image, type, name, location, score, content } = props;
  return (
    <>
      <div className="story-item mb-4">
        <Ratio aspectRatio="1x1">
          {image ? <Image className="image" src={image} alt="活動圖片" /> : <div>抱歉，發生了一些錯誤</div>}
        </Ratio>
        <div className="mt-3 mb-2">
          <span className="chip">{type}</span>
        </div>
        <div className="d-flex align-items-center">
          <span className="name fw-bold">{name}</span>
          <span className="location fw-bold">
            <Image className="mx-1" src={locationIcon.src} alt="地點" width="15" />
            {location}
          </span>
        </div>
        <div className="d-flex flex-column flex-xl-row justify-content-start fw-bold my-2">
          <span className="me-1 d-md-inline-block d-none">新新指數</span>
          <span>
            <Rating score={score} />
          </span>
        </div>
        <p>{content}</p>
      </div>
    </>
  );
};

export default StoryItem;
