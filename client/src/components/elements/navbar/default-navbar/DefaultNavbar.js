import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './DefaultNavbar.css';

import { ReactComponent as SafeSpace } from '../../../../resources/img/icons/safe-space.svg';
import { ReactComponent as Home } from '../../../../resources/img/icons/home.svg';
import { ReactComponent as ModernWorld } from '../../../../resources/img/icons/modern-world.svg';
import { ReactComponent as Imaginarium } from '../../../../resources/img/icons/imaginarium.svg';
import { ReactComponent as AncientWorld } from '../../../../resources/img/icons/ancient-world.svg';

const DefaultNavbar = () => {
  return (
    <Fragment>
      <NavLink exact to="/" activeClassName="active">
        <Home />
      </NavLink>
      <NavLink exact to="/safe-space" activeClassName="active">
        <SafeSpace />
      </NavLink>
      <NavLink exact to="/modern-world" activeClassName="active">
        <ModernWorld />
      </NavLink>
      <NavLink exact to="/imaginarium" activeClassName="active">
        <Imaginarium />
      </NavLink>
      <NavLink exact to="/ancient-world" activeClassName="active">
        <AncientWorld />
      </NavLink>
    </Fragment>
  );
};

export default DefaultNavbar;
