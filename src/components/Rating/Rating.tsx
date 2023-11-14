import React, { useMemo } from 'react';

import RatingItem from './RateItem';

const MAX = 5;

type RatingProps = {
  score: number;
};

const Rating = (props: RatingProps) => {
  const { score } = props;
  const full = useMemo(() => Array(score).fill(0), [score]);
  const empty = useMemo(() => Array(MAX - score).fill(0), [score]);

  return (
    <>
      {full.map((num, i) => (
        <RatingItem key={i} isFull={true} />
      ))}
      {empty.map((num, i) => (
        <RatingItem key={i} isFull={false} />
      ))}
    </>
  );
};

export default Rating;
