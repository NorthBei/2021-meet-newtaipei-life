import React from 'react';
import { Nav } from 'react-bootstrap';
import ScrollSpy from 'react-scrollspy';

import MenuButton from './MenuButton';

enum SectionId {
  About = 'about',
  Online = 'online',
  Offline = 'offline',
  Story = 'story'
}

type ListMenuProps = {
  onClick?: () => void;
};

const ListMenu = (props: ListMenuProps) => {
  const { onClick } = props;
  return (
    <Nav id="list-menu" className="d-flex flex-column">
      <ScrollSpy
        className="p-0"
        items={[SectionId.About, SectionId.Online, SectionId.Offline, SectionId.Story]}
        currentClassName="is-current"
        offset={-100}
      >
        <MenuButton className="mt-2" zh="新新厝邊" en="About" to={`#${SectionId.About}`} onClick={onClick} />
        <MenuButton className="mt-2" zh="線上體驗" en="Online" to={`#${SectionId.Online}`} onClick={onClick} />
        <MenuButton className="mt-2" zh="在地體驗" en="Offline" to={`#${SectionId.Offline}`} onClick={onClick} />
        <MenuButton className="mt-2" zh="故事牆" en="Story" to={`#${SectionId.Story}`} onClick={onClick} />
      </ScrollSpy>
    </Nav>
  );
};

export default ListMenu;
