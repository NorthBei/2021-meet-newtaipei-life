import './Floating.scss';

import Link from 'next/link';
import React from 'react';
import { Image } from 'react-bootstrap';

import CopyText from '@/components/CopyText';
import messengerIcon from '@/images/icon-messenger.svg';
import shareIcon from '@/images/icon-share.svg';
import logoDesktop from '@/images/logo-desktop.png';
import topTopBtn from '@/images/to-top-button.svg';
import { MESSENGER_URL } from '@/modules/const';

const Floating = () => {
  return (
    <div id="event-floating" className="position-relative">
      <div className="logo-desktop d-md-block d-none">
        <Link href="/">
          <Image className="w-100" src={logoDesktop.src} alt="logo" width="250" fluid />
        </Link>
      </div>
      <div className="fix-button-group">
        <div className="d-md-none d-flex flex-column align-items-center">
          <CopyText>
            <button className="button share mb-2">
              <Image src={shareIcon.src} alt="share icon" width="24" />
            </button>
          </CopyText>
          <a href={MESSENGER_URL} target="_blank" rel="noreferrer noopener" className="button message mb-2">
            <Image src={messengerIcon.src} alt="messenger icon" width="24" />
          </a>
        </div>
        <Link href="#app" className="to-top-button">
          <Image src={topTopBtn.src} alt="to-top-button" width="70" fluid />
        </Link>
      </div>
    </div>
  );
};

export default Floating;
