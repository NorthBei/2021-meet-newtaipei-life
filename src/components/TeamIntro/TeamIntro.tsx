import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TeamIntro.scss';

import parse from 'html-react-parser';
import React from 'react';
import { Image } from 'react-bootstrap';
import Slider, { Settings } from 'react-slick';

import Tags from '@/components/InfoImage/Tags';
import UserIntro from '@/components/UserIntro/UserIntro';
import { TeamInEvent } from '@/data/teams';
import facebookIcon from '@/images/icon-facebook.svg';
import websiteIcon from '@/images/icon-website.svg';
import importImage from '@/utils/importImage';

const settings: Settings = {
  lazyLoad: 'ondemand',
  dots: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

type TeamIntroProps = {
  team: TeamInEvent;
};

const TeamIntro = (props: TeamIntroProps) => {
  const { team } = props;

  return (
    <div id="team-intro">
      <section>
        <div className="d-flex flex-md-row flex-column my-4">
          <div className="d-flex align-items-center flex-grow-1">
            <Image className="avatar" src={importImage(team.avatar)} alt="大頭貼" width="72px" />
            <div className="ms-3 d-flex flex-column">
              <span className="title d-flex align-items-center fw-bold">
                <h2 className="text-level-2 my-0 me-1">{team.name}</h2>
                <Tags list={team.tags} tagAlign="start" />
              </span>
              <div className="d-flex">
                {team.facebook && (
                  <a href={team.facebook} target="_blank" rel="noopener noreferrer">
                    <Image className="link me-1" src={facebookIcon.src} alt="facebook" width="24" />
                  </a>
                )}
                {team.website && (
                  <a href={team.website} target="_blank" rel="noopener noreferrer">
                    <Image className="link me-1" src={websiteIcon.src} alt="website" width="24" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mt-md-0 mt-4">
            {team.sdgs.map((sdgsIndex, i) => {
              return (
                <Image
                  key={i}
                  className="sdgs ms-2"
                  src={`https://www163.cjcu.edu.tw/images/sdg/png/sdg${sdgsIndex}00.png`}
                  width="48"
                  alt="sdgs"
                />
              );
            })}
          </div>
        </div>
        <div className="area d-flex flex-md-row flex-column align-items-center">
          <Image className="image mb-md-0 mb-4 flex-shrink-0" src={importImage(team.area.map)} alt="地圖" width="200" />
          <div className="intro ms-md-3 ms-0">
            <p>{parse(team.area.description)}</p>
          </div>
        </div>
      </section>
      <hr />
      <section className="plan py-3">
        <h2 className="title text-level-2 mb-3">計畫介紹：{team.plan.title}</h2>
        <Slider className="slide mb-4" {...settings}>
          {team.plan.images.map((image, i) => {
            return (
              <div key={i} className="px-2">
                <Image src={importImage(image)} alt={`slide${i}`} fluid />
              </div>
            );
          })}
        </Slider>
        <div className="d-inline-block mt-3">
          {team.plan.description.map((desc, i) => {
            return (
              <p className="intro" key={i}>
                {parse(desc)}
              </p>
            );
          })}
        </div>
      </section>
      <hr />
      <section className="fqa-list py-3">
        <h2 className="text-level-2 mb-3">社區快問快答！</h2>
        {team.fqa.map(({ q, a }, i) => {
          return (
            <article key={i} className="fqa mb-4">
              <p className="question fw-bold">Q：{q}</p>
              <p className="answer m-0">A：{a}</p>
            </article>
          );
        })}
      </section>
      <hr />
      <section className="py-3">
        <h2 className="text-level-2 mb-4">不藏私！附近其他社區推薦</h2>
        {team.nearbyCommunity.map((community, i) => {
          return (
            <UserIntro
              key={i}
              className="recommend-local-guide mb-3"
              avatar={community.avatar}
              title={community.title}
              intro={community.description}
              link={community.link}
              vertical="center"
            />
          );
        })}
      </section>
    </div>
  );
};

export default TeamIntro;
