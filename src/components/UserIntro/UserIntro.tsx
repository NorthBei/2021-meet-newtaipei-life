import './UserIntro.scss';

import clsx from 'clsx';
import React from 'react';
import { Image } from 'react-bootstrap';

import importImage from '@/utils/importImage';

type UserIntroProps = {
  className?: string;
  vertical?: string;
  avatar: string;
  title: string;
  intro: string;
  link?: string | null;
};

const UserIntro = (props: UserIntroProps) => {
  const { className = '', vertical = 'start', avatar, title, intro, link } = props;

  return (
    <div className={clsx('user-info d-flex mb-4', `align-items-${vertical}`, className)}>
      <Image src={importImage(avatar)} className="avatar flex-shrink-0" alt="avatar" height="72" width="72" />
      <div className="ms-3">
        <span className="info fw-bold">
          {link ? (
            <a href={link} target="_blank" rel="noreferrer noopener">
              {title}
            </a>
          ) : (
            title
          )}
        </span>
        <p className="intro m-0 mt-2">{intro}</p>
      </div>
    </div>
  );
};

export default UserIntro;
