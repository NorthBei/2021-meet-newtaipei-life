'use client';

import './HamburgerMenu.scss';

import React, { useCallback, useState } from 'react';
import { Image, Modal } from 'react-bootstrap';

import Footer from '@/components/Footer';
import ListMenu from '@/components/ListMenu';
import closeIcon from '@/images/icon-close.svg';
import hamburgerIcon from '@/images/icon-hamburger.svg';

const HamburgerMenu = () => {
  const [isShow, setIsShow] = useState(false);

  const showMenu = useCallback(() => setIsShow(true), []);

  const hideMenu = useCallback(() => setIsShow(false), []);

  return (
    <>
      <button className="circle-button" onClick={showMenu}>
        <Image src={hamburgerIcon.src} alt="選單" />
      </button>
      <Modal show={isShow} fullscreen={true} animation={false}>
        <Modal.Header className="border-0 d-flex flex-row-reverse">
          <button className="circle-button" onClick={hideMenu}>
            <Image src={closeIcon.src} alt="關閉" />
          </button>
        </Modal.Header>
        <Modal.Body className="p-4 pt-0 d-flex flex-column justify-content-between align-items-center">
          <ListMenu onClick={hideMenu} />
          <Footer />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HamburgerMenu;
