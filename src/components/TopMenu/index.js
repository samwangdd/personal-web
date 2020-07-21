import React, { useState, useEffect } from 'react';
import { Segment, Menu, MenuItem } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

// import { EventTarget } from '../../pages/bytedance';
// import { logo } from '@images/index';

// const initPage = () => console.log('init page');

/* const target = new EventTarget();
target.on('activeItem', () => alert('activeItem changed!'));
target.once('init', () => console.log('init page')); */

function TopMenu(params) {
  const { list, location, history } = params;
  const { pathname } = location;
  const [activeItem, setActiveItem] = useState(pathname);
  /*   useEffect(() => {
    target.trigger({ type: 'init' });
  }, []) */

  useEffect(() => {
    history.push(`${activeItem}`);
    // target.trigger({ type: 'activeItem' });
  }, [history, activeItem]);

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item>
          <img alt="logo" src="../../images/Logo.png" />
        </Menu.Item>
        {list.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            active={activeItem === item.path}
            onClick={() => setActiveItem(item.path)}
          />
        ))}
      </Menu>
    </Segment>
  );
}

export default withRouter(TopMenu);
