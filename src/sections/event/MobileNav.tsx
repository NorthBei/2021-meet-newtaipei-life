import './MobileNav.scss';

import Link from 'next/link';
import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';

import HamburgerMenu from '@/components/HamburgerMenu';
import logoMobile from '@/images/logo-mobile.png';

const MobileNav = () => {
  return (
    <Navbar sticky="top" bg="white" className="d-md-none d-flex">
      <Container>
        <div className="d-flex align-items-center w-100">
          <Link href="/" className="flex-grow-1">
            <Image src={logoMobile.src} alt="logo" height="50" />
          </Link>
          <HamburgerMenu />
        </div>
      </Container>
    </Navbar>
  );
};

export default MobileNav;
