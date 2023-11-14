import './CommunityInfo.scss';

import clsx from 'clsx';
import React, { useMemo } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import TeamIntro from '@/components/TeamIntro/TeamIntro';
import { Event } from '@/data/events';
import { teamsInEvent } from '@/data/teams';

type CommunityInfoProps = {
  info: Event['communityIntro'];
  color: string;
};

const CommunityInfo = (props: CommunityInfoProps) => {
  const { info, color } = props;

  const teams = useMemo(() => teamsInEvent.filter((team) => info.teams.includes(team.name)), [info.teams]);

  return (
    <>
      {teams.length === 1 ? (
        <TeamIntro team={teams[0]} />
      ) : (
        <Tabs id="team-tabs" defaultActiveKey="team0" className={clsx('team-tabs mt-4', color)}>
          {teams.map((team, i) => {
            return (
              <Tab key={i} eventKey={`team${i}`} title={team.name}>
                <TeamIntro team={team} />
              </Tab>
            );
          })}
        </Tabs>
      )}
    </>
  );
};

export default CommunityInfo;
