import React from 'react';
import { NavLink } from 'react-router-dom';

import './MiniNav.css';

import { ReactComponent as FakeIcon } from '../../../resources/img/icons/safe-space.svg';

const MiniNav = () => {
  return (
    <div className="mini-nav">
      <NavLink
        exact
        to="/safe-space"
        activeClassName="active-navbar-icon"
        className="mini-nav-link"
      >
        <FakeIcon />
        <sub>Pourquoi</sub>
      </NavLink>
      <NavLink
        exact
        to="/safe-space/quotes"
        activeClassName="active-navbar-icon"
        className="mini-nav-link"
      >
        <FakeIcon />
        <sub>Micro-vécus</sub>
      </NavLink>
      <NavLink
        exact
        to="/safe-space/chat"
        activeClassName="active-navbar-icon"
        className="mini-nav-link"
      >
        <FakeIcon />
        <sub>Notre Slack</sub>
      </NavLink>
    </div>
  );
};

export default MiniNav;
