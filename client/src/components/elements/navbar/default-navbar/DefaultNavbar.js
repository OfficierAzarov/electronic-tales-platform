import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './DefaultNavbar.css';

import { ReactComponent as SafeSpace } from '../../../../resources/img/icons/safe-space.svg';
import { ReactComponent as Home } from '../../../../resources/img/icons/home.svg';
import { ReactComponent as ModernWorld } from '../../../../resources/img/icons/modern-world.svg';
import { ReactComponent as Imaginarium } from '../../../../resources/img/icons/imaginarium.svg';
import { ReactComponent as AncientWorld }  from '../../../../resources/img/icons/ancient-world.svg';

const DefaultNavbar = () => {
  return (
    <Fragment>
      <NavLink exact to="/" activeClassName="active">
        {/* <img src={home} alt="home icon" /> */}
        <Home />
      </NavLink>
      <NavLink exact to="/safe-space" activeClassName="active">
        <SafeSpace />
      </NavLink>
      <NavLink exact to="/modern-world" activeClassName="active">
        {/* <img src={modernWorld} alt="modern world icon" /> */}
        <ModernWorld />
      </NavLink>
      <NavLink exact to="/imaginarium" activeClassName="active">
        {/* <img src={imaginarium} alt="imaginarium icon" /> */}
        <Imaginarium />
      </NavLink>
      <NavLink exact to="/ancient-world" activeClassName="active">
        {/* <img src={ancientWorld} alt="ancient world icon" /> */}
        <AncientWorld />
      </NavLink>
    </Fragment>
  );
};

export default DefaultNavbar;
