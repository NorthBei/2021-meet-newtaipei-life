import './InfoImage.scss';

import clsx from 'clsx';
import React, { useMemo } from 'react';
import { Image, Ratio, RatioProps } from 'react-bootstrap';

import LabelTag from '@/components/LabelTag';
import { EventStatus } from '@/data/events';

import Tags from './Tags';

type InfoImageProps = {
  src: string;
  ratio: RatioProps['aspectRatio'];
  label: string;
  labelClass?: string;
  color: string;
  tags: string[];
  tagsClass?: string;
  status: EventStatus;
  isTagsShowOnMobile: boolean;
};

const InfoImage = (props: InfoImageProps) => {
  const { src, ratio, label, labelClass = '', color, tags, tagsClass = '', status, isTagsShowOnMobile } = props;

  const statusText = useMemo(() => {
    switch (status) {
      case EventStatus.SoldOut:
        return '已售完';
      case EventStatus.Finished:
        return '已結束';
      default:
        return '';
    }
  }, [status]);

  return (
    <>
      <div
        className={clsx('info-image', {
          cover: [EventStatus.SoldOut, EventStatus.Finished].includes(status)
        })}
      >
        <div className="status-info">{statusText}</div>
        <div className="components">
          <div className={clsx('label', labelClass)}>
            <LabelTag color={color}>{label}</LabelTag>
          </div>
          <Ratio aspectRatio={ratio}>
            <Image className="image position-absolute" src={src} alt="活動圖片" />
          </Ratio>
          <div
            className={clsx('tag-list', {
              'd-md-block d-none': !isTagsShowOnMobile
            })}
          >
            <Tags list={tags} tagAlign="end" tagWrapperClass={tagsClass} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoImage;
