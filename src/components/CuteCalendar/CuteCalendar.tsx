import './CuteCalendar.scss';

import dateFormat from 'dateformat';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';

import chineseCalendar from '@/data/chineseCalendar';
import canDoIcon from '@/images/home-calendar-left.svg';
import notDoIcon from '@/images/home-calendar-right.svg';

const LOADING_TEXT = '等我一下';

const CuteCalendar = () => {
  const [calendar, setCalendar] = useState({
    year: '0000',
    month: '零',
    date: '0',
    day: '零'
  });

  const [suggestion, setSuggestion] = useState({
    canDo: LOADING_TEXT,
    notDo: LOADING_TEXT
  });

  useEffect(() => {
    const now = new Date();

    const [year, month, date] = dateFormat(now, 'yyyy/mm/dd').split('/');
    const thisMonth = month as keyof typeof chineseCalendar.month;
    const today = now.getDay().toString() as keyof typeof chineseCalendar.day;

    setCalendar({
      year,
      month: chineseCalendar.month[thisMonth],
      date,
      day: chineseCalendar.day[today]
    });

    const canDoIndex = Math.floor(Math.random() * chineseCalendar.suggestion['canDo'].length);
    const notDoIndex = Math.floor(Math.random() * chineseCalendar.suggestion['notDo'].length);
    setSuggestion({
      canDo: chineseCalendar.suggestion['canDo'][canDoIndex],
      notDo: chineseCalendar.suggestion['notDo'][notDoIndex]
    });
  }, []);

  return (
    <div id="cute-calendar">
      <div className="year d-none d-md-flex justify-content-center fs-4 fw-bold">
        {calendar.year.split('').map((num, i) => {
          return (
            <span className="year-circle" key={i}>
              {num}
            </span>
          );
        })}
      </div>
      <div className="date d-flex flex-column">
        <div className="head d-flex justify-content-center align-items-center fw-bold">
          <div className="mobile d-block d-md-none">
            {calendar.month}月{calendar.date}日
          </div>
        </div>
        <div className="body px-0 px-md-2 flex-grow-1 d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column align-items-center p-1">
            <Image className="w-100" src={canDoIcon.src} alt="宜" />
            <span className="text mt-2">{suggestion.canDo}</span>
          </div>
          <div className="line h-100 d-block d-md-none"></div>
          <div className="d-none d-md-flex flex-column align-items-center fw-bold">
            <span className="fs-5">{calendar.month}月</span>
            <span className="display-2 fw-bold lh-1">{calendar.date}</span>
            <span className="fs-5">禮拜{calendar.day}</span>
          </div>
          <div className="d-flex flex-column align-items-center p-1">
            <Image className="w-100" src={notDoIcon.src} alt="忌" />
            <span className="text mt-2">{suggestion.notDo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuteCalendar;
