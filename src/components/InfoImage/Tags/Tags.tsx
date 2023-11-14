import './Tags.scss';

import clsx from 'clsx';
import React from 'react';

type TagsProps = {
  list: string[];
  tagAlign: string;
  tagWrapperClass?: string;
  color?: string;
};

const Tags = (props: TagsProps) => {
  const { list, tagAlign: align, tagWrapperClass = '', color = '' } = props;
  return (
    <div className={clsx('tag-wrapper d-flex flex-wrap-reverse', `justify-content-${align}`, tagWrapperClass)}>
      {list.map((text, i) => {
        return (
          <span className={clsx('tag', color)} key={i}>
            {text}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
