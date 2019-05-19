import React, { useState } from "react";
import { Menu, MenuItem } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

// import { getUrlParams } from "@utils/index";
function TopMenu(params) {
  const { list, location } = params;
  const { pathname } = location;
  const [activeItem, setActiveItem] = useState(pathname);

  return (
    <Menu pointing secondary>
      <Menu.Menu position="right">
        {list.map(item => (
          <MenuItem
            key={item.key}
            name={item.key}
            active={activeItem === item.path}
            onClick={() => setActiveItem(item.path)}
          >
            <Link to={item.path}>{item.name}</Link>
          </MenuItem>
        ))}
      </Menu.Menu>
    </Menu>
  );
}

export default withRouter(TopMenu);
