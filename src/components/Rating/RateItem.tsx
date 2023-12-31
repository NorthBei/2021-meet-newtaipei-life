import React from 'react';

type RatingItemProps = {
  isFull: boolean;
};

const RatingItem = (props: RatingItemProps) => {
  const { isFull } = props;
  const color = isFull ? '#59D4EF' : 'white';

  return (
    <svg width="24" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          fill={color}
          d="M7 16H2.9a.5.5 0 0 1-.5-.5l-.6-4.6A1835.9 1835.9 0 0 1 .6 2v-.2a.5.5 0 0 1 .1-.4l.4-.1h.3c.4.2.8.3 1.3.3h3.4a.5.5 0 0 1 .4.4l.7 4.3L8.7 2a.5.5 0 0 1 .5-.4h4.5a.5.5 0 0 1 .5.4l.2.5.6 3.8 1.5-4.4a.5.5 0 0 1 .5-.4h5a.5.5 0 0 1 .5.2.5.5 0 0 1 0 .5l-.2.9-.6 1.8-1 3.4-1.6 5a3.2 3.2 0 0 1-3.3 2.6h-4.2a.5.5 0 0 1-.5-.4l-.4-3v-.3.1l-.3.9-.1.2A3.2 3.2 0 0 1 7.2 16H7Z"
        />
        <path
          fill="#3E3A39"
          d="M1.1 1.6c.5.3 1 .4 1.6.4H6l1 6c.8-2 1.5-4 2-6h4.6l.2.6.8 5 .2.5 2-6.1H22l-.9 2.7-2.6 8.4a2.7 2.7 0 0 1-2.9 2.3h-4.1c-.4-1.7-.5-3.5-.8-5.4l-.7 2.2-.3 1.1A2.7 2.7 0 0 1 7 15.4H2.6l-.4-3.5L1 2.4v-.8h.1Zm0-1a1 1 0 0 0-.7.3 1 1 0 0 0-.3.8v.7l1 8.4.2 1.2.3 2.4.2 1a1 1 0 0 0 1 1h4.4a3.7 3.7 0 0 0 3.3-2c0 .3 0 .7.2 1.1a1 1 0 0 0 1 .8h4.1a3.7 3.7 0 0 0 3.9-3l1.5-5 1-3.3.6-1.9.2-.8v-.4a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 .7L15.2 4v.1L15 2.3c0-.2 0-.4-.2-.6a1 1 0 0 0-1-.7H9.3a1 1 0 0 0-1 .6l-.8 2.5L7 1.8a1 1 0 0 0-1-.9H2.7l-1-.1a1 1 0 0 0-.6-.3Z"
        />
      </g>
    </svg>
  );
};

export default RatingItem;
