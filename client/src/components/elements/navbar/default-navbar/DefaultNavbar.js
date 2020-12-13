import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './DefaultNavbar.css';

import { ReactComponent as SafeSpace } from '../../../../resources/img/icons/safe-space.svg';
import safeSpace from '../../../../resources/img/icons/safe-space.svg';
import home from '../../../../resources/img/icons/home.png';
import modernWorld from '../../../../resources/img/icons/modern-world.png';
import imaginarium from '../../../../resources/img/icons/imaginarium.png';
import ancientWorld from '../../../../resources/img/icons/ancient-world.png';

const DefaultNavbar = () => {
  return (
    <Fragment>
      <NavLink exact to="/" activeClassName="active">
        <img src={home} alt="home icon" />
      </NavLink>
      <NavLink exact to="/safe-space" activeClassName="active">
        <SafeSpace />
        {/* <img src={safeSpace} alt="safe space icon" /> */}
      </NavLink>
      <NavLink exact to="/modern-world" activeClassName="active">
        <img src={modernWorld} alt="modern world icon" />
      </NavLink>
      <NavLink exact to="/imaginarium" activeClassName="active">
        <img src={imaginarium} alt="imaginarium icon" />
      </NavLink>
      <NavLink exact to="/ancient-world" activeClassName="active">
        <img src={ancientWorld} alt="ancient world icon" />
      </NavLink>
    </Fragment>
  );
};

export default DefaultNavbar;
