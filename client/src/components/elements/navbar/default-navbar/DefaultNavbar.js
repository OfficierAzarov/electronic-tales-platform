import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './DefaultNavbar.css';

import { ReactComponent as SafeSpaceIcon } from '../../../../resources/img/icons/v2/safespace-opt.svg';
import HomeIcon from '../../../../resources/img/icons/v2/HomeSVG';
import { ReactComponent as ModernWorldIcon } from '../../../../resources/img/icons/v2/modernworld-screen-original.svg';
import { ReactComponent as ImaginariumIcon } from '../../../../resources/img/icons/imaginarium.svg';
import { ReactComponent as AncientWorldIcon } from '../../../../resources/img/icons/ancient-world.svg';

const DefaultNavbar = () => {
  return (
    <Fragment>
      <NavLink exact to="/" activeClassName="active-navbar-icon">
        <HomeIcon />
      </NavLink>
      <NavLink exact to="/safe-space" activeClassName="active-navbar-icon">
        <SafeSpaceIcon />
      </NavLink>
      <NavLink exact to="/modern-world" activeClassName="active-navbar-icon">
        <ModernWorldIcon />
      </NavLink>
      <NavLink exact to="/imaginarium" activeClassName="active-navbar-icon">
        <ImaginariumIcon />
      </NavLink>
      <NavLink exact to="/ancient-world" activeClassName="active-navbar-icon">
        <AncientWorldIcon />
      </NavLink>
    </Fragment>
  );
};

export default DefaultNavbar;
