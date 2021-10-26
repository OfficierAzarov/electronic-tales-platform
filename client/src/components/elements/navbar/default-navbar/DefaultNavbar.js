import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import './DefaultNavbar.css';

import logoSmall from '../../../../resources/img/logo-transparent-350.png';
import { ReactComponent as SafeSpaceIcon } from '../../../../resources/img/icons/v2/safespace-opt.svg';
import HomeIcon from '../../../../resources/img/icons/v2/HomeSVG';
import { ReactComponent as ModernWorldIcon } from '../../../../resources/img/icons/v2/modernworld-screen-original.svg';
import ImaginariumIcon from '../../../../resources/img/icons/v2/ImaginariumSVG';
import { ReactComponent as AncientWorldIcon } from '../../../../resources/img/icons/ancient-world.svg';

const DefaultNavbar = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 768px)',
  });

  return (
    <Fragment>
      <NavLink to="/safe-space" activeClassName="active-navbar-icon">
        <SafeSpaceIcon />
        <sub>Safe space</sub>
      </NavLink>
      <NavLink to="/modern-world" activeClassName="active-navbar-icon">
        <ModernWorldIcon />
        <sub>Modern world</sub>
      </NavLink>
      <NavLink to="/imaginarium" activeClassName="active-navbar-icon">
        <ImaginariumIcon />
        <sub>Imaginarium</sub>
      </NavLink>
      <NavLink to="/ancient-world" activeClassName="active-navbar-icon">
        <AncientWorldIcon />
        <sub>Ancient world</sub>
      </NavLink>
    </Fragment>
  );
};

export default DefaultNavbar;
