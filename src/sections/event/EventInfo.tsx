import './EventInfo.scss';

import parse from 'html-react-parser';
import React from 'react';

import { Event } from '@/data/events';

type EventInfoProps = {
  intro: Event['eventIntro'];
};

const TITLE_MARK = '@';

const EventInfo = (props: EventInfoProps) => {
  const { intro } = props;

  return (
    <>
      <div id="event-info">
        <section className="intro py-3">
          {/* 第一個paraph是用來當margin-top用的 */}
          <p></p>
          {intro.paragraphs.map((text, i) => {
            if (text.startsWith(TITLE_MARK)) {
              return (
                <h5 key={i} className="title d-inline-block fw-bold mt-4 mb-3">
                  {text.replace(TITLE_MARK, '')}
                </h5>
              );
            }
            return <p key={i}>{parse(text)}</p>;
          })}
        </section>
        <hr />
        <section className="notice py-2">
          <h2 className="text-level-2 my-3">注意事項</h2>
          <ol className="list">
            {intro.notice.map((notice, i) => {
              return <li key={i}>{notice}</li>;
            })}
          </ol>
        </section>
      </div>
    </>
  );
};

export default EventInfo;
