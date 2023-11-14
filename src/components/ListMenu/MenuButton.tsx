import './MenuButton.scss';

import clsx from 'clsx';
import React from 'react';
import { Nav } from 'react-bootstrap';

type MenuButtonProps = {
  zh: string;
  en: string;
  to: string;
  className?: string;
  onClick?: () => void;
};

const MenuButton = (props: MenuButtonProps) => {
  const { zh, en, to, className = '', onClick } = props;
  return (
    <Nav.Link href={to} className={clsx('menu-button', className)} onClick={onClick}>
      {zh}
      <br />
      {en}
    </Nav.Link>
  );
};

export default MenuButton;
