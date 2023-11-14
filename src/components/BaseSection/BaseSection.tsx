import './BaseSection.scss';

import React from 'react';
import { Container, Image } from 'react-bootstrap';

type BaseSectionProps = {
  id: string;
  image: string;
  alt: string;
  children: React.ReactNode;
};

const BaseSection = (props: BaseSectionProps) => {
  const { id, image, alt, children } = props;
  return (
    <Container id={id} className="base-container d-flex position-relative">
      <div className="sub-container-side"></div>
      <div className="sub-container w-100">{children}</div>
      <div className="sub-container-side">
        <div className="subtitle-image">
          <Image src={image} alt={alt} width="80" fluid />
        </div>
      </div>
    </Container>
  );
};

export default BaseSection;
