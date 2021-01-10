import React from 'react';
import { NavLink } from 'react-router-dom';

import './MiniNav.css';

import { ReactComponent as FakeIcon } from '../../../resources/img/icons/safe-space.svg';

const MiniNav = () => {
  return (
    <div className="mini-nav">
      <NavLink to="/safe-space/quotes" activeClassName="active">
        <FakeIcon />
      </NavLink>
      <NavLink to="/safe-space/chat" activeClassName="active">
        <FakeIcon />
      </NavLink>
    </div>
  );
};

export default MiniNav;