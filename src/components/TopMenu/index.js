import React, { useState, useEffect } from 'react';
import { Segment, Menu, MenuItem } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

// import { logo } from '@images/index';

function TopMenu(params) {
  const { list, location, history } = params;
  const { pathname } = location;
  const [activeItem, setActiveItem] = useState(pathname);

  useEffect(() => {
    history.push(`${activeItem}`);
  }, [history, activeItem]);

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item>
          <img alt="logo" src="../../images/Logo.png" />
        </Menu.Item>
        {list.map(item => (
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
