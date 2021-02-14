import React from 'react';
import { NavLink } from 'react-router-dom';

import './MiniNav.css';

import { ReactComponent as ChatIcon } from '../../../resources/img/icons/chat.svg';
import { ReactComponent as QuotesIcon } from '../../../resources/img/icons/notebook.svg';
import { ReactComponent as WhyIcon } from '../../../resources/img/icons/lightbulb.svg';

const MiniNav = () => {
  return (
    <div className="mini-nav">
      <NavLink
        exact
        to="/safe-space"
        activeClassName="active-navbar-icon"
        className="mini-nav-link"
      >
        <WhyIcon />
        <sub>Pourquoi</sub>
      </NavLink>
      <NavLink
        exact
        to="/safe-space/quotes"
        activeClassName="active-navbar-icon"
        className="mini-nav-link"
      >
        <QuotesIcon />
        <sub>Micro-vécus</sub>
      </NavLink>
      <NavLink
        exact
        to="/safe-space/chat"
        activeClassName="active-navbar-icon"
        className="mini-nav-link"
      >
        <ChatIcon />
        <sub>Notre Slack</sub>
      </NavLink>
    </div>
  );
};

export default MiniNav;
