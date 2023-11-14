import './Floating.scss';

import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Container, Image } from 'react-bootstrap';

import HamburgerMenu from '@/components/HamburgerMenu';
import ListMenu from '@/components/ListMenu';
import topTopBtn from '@/images/to-top-button.svg';
import { BOOTSTRAP_MOBILE_WIDTH } from '@/modules/const';

type FloatingProps = {
  isOutFold: boolean;
  children?: React.ReactNode;
};

const Floating = (props: FloatingProps) => {
  const { isOutFold, children } = props;
  const [menuLeft, setMenuLeft] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && window.innerWidth > BOOTSTRAP_MOBILE_WIDTH) {
      if (isOutFold) {
        const box = containerRef.current.getBoundingClientRect();
        const paddingRight = parseInt(window.getComputedStyle(containerRef.current).paddingRight);
        setMenuLeft(`${paddingRight + Math.ceil(box.x)}px`);
      } else {
        setMenuLeft(null);
      }
    }
  }, [isOutFold, containerRef]);

  return (
    <section id="home-floating">
      <Container ref={containerRef}>
        <div className="hamburger-menu d-md-none d-block">
          <HamburgerMenu />
        </div>
        <section>
          <div className="position-relative">
            <div className="list-menu d-none d-md-block" style={menuLeft ? { left: menuLeft } : {}}>
              <ListMenu />
            </div>
            <Link
              href="#app"
              className={clsx('to-top-button', {
                show: isOutFold
              })}
            >
              <Image src={topTopBtn.src} alt="to-top-button" width="70" fluid />
            </Link>
          </div>
        </section>
        {children}
      </Container>
    </section>
  );
};

export default Floating;
