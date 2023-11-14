import './LabelTag.scss';

import clsx from 'clsx';
import React from 'react';

type LabelTagProps = {
  children: React.ReactNode;
  color: string;
  size?: string;
};

const LabelTag = (props: LabelTagProps) => {
  const { children, color, size = 'md' } = props;
  return <span className={clsx('label-tag fw-bold', color, size)}>{children}</span>;
};

export default LabelTag;
