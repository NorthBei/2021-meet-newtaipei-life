import './Footer.scss';

import React from 'react';
import { Image } from 'react-bootstrap';

import footerLogo1 from '@/images/footer-logo-1.jpg';
import footerLogo2 from '@/images/footer-logo-2.jpg';
import footerLogo3 from '@/images/footer-logo-3.jpg';

const Footer = () => {
  return (
    <section id="footer" className="d-flex justify-content-center align-items-center flex-md-row flex-column">
      <div className="d-flex align-items-center flex-md-row flex-column me-md-3 mb-md-0 mb-3">
        <span className="me-md-2 mb-md-0 mb-2">指導單位</span>
        <Image src={footerLogo1.src} alt="文化部logo" height={25} />
      </div>
      <div className="d-flex align-items-center flex-md-row flex-column me-md-3 mb-md-0 mb-3">
        <span className="me-md-2 mb-md-0 mb-2">主辦單位</span>
        <Image src={footerLogo2.src} alt="新北市政府logo" height={25} />
      </div>
      <div className="d-flex align-items-center flex-md-row flex-column me-md-3 mb-md-0 mb-3">
        <span className="me-md-2 mb-md-0 mb-2">承辦單位</span>
        <Image src={footerLogo3.src} alt="新北市政府文化局logo" height={25} />
      </div>
      <div>客服信箱 service@rollinginlife.tw</div>
    </section>
  );
};

export default Footer;
