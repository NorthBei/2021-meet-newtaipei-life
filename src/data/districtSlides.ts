import events from './events';
import { teamsInDistrictSlide, teamsInEvent } from './teams';
import { DistrictColor, DistrictType } from './types';

export type SlideItem = {
  type: DistrictType;
  teams: DistrictSlideData[];
};

type DistrictSlideData = {
  district: string;
  image: string;
  name: string;
  plan: {
    title: string;
    intro: string;
  };
  link: string | null;
  isFacebookLink: boolean;
};

const slideList: Record<DistrictColor, SlideItem> = {
  [DistrictColor.Red]: {
    type: DistrictType.City,
    teams: []
  },
  [DistrictColor.Green]: {
    type: DistrictType.Mountain,
    teams: []
  },
  [DistrictColor.Blue]: {
    type: DistrictType.Ocean,
    teams: []
  }
};

teamsInEvent.forEach((team) => {
  const event = events.find((event) => event.communityIntro.teams.includes(team.name));
  if (!event) {
    console.error('Cannot find this team in event:', team.name);
    return;
  }

  const teamItem: DistrictSlideData = {
    // 淡水、三芝 -> 淡水
    district: event.district.name.split('、')[0],
    image: team.slideImage,
    name: team.name,
    plan: {
      ...team.plan
    },
    link: event.meta.path,
    isFacebookLink: false
  };

  slideList[event.district.color].teams.push(teamItem);
});

teamsInDistrictSlide.forEach((team) => {
  const teamItem: DistrictSlideData = {
    district: team.district.name,
    image: team.slideImage,
    name: team.name,
    plan: {
      ...team.plan
    },
    link: team.facebook,
    isFacebookLink: true
  };

  slideList[team.district.color].teams.push(teamItem);
});

export default slideList;
