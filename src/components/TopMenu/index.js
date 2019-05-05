import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

function TopMenu(params) {
  const [ activeItem, setActiveItem ] = useState('home');

  return(
    <Menu pointing secondary>
      <Menu.Menu position="right">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={() => setActiveItem('home')}
        >
        </Menu.Item>
        <Menu.Item
          name="content"
          active={activeItem === "content"}
          onClick={() => setActiveItem('content')}
        >
        </Menu.Item>
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={() => setActiveItem('about')}
        >
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default TopMenu;