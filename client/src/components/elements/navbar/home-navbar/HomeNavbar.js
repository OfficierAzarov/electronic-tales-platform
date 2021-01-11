import React, { Fragment } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import './HomeNavbar.css';

import { ReactComponent as SafeSpaceIcon } from '../../../../resources/img/icons/safe-space.svg';
import { ReactComponent as ModernWorldIcon } from '../../../../resources/img/icons/modern-world.svg';
import { ReactComponent as ImaginariumIcon } from '../../../../resources/img/icons/imaginarium.svg';
import { ReactComponent as AncientWorldIcon } from '../../../../resources/img/icons/ancient-world.svg';

const HomeNavbar = () => {
  return (
    <Fragment>
      <ScrollLink
        activeClass="active-navbar-icon"
        to="home-safe-space"
        spy={true}
        smooth={true}
        duration={500}
      >
        <SafeSpaceIcon />
      </ScrollLink>
      <ScrollLink
        activeClass="active-navbar-icon"
        to="home-modern-world"
        spy={true}
        smooth={true}
        duration={500}
      >
        <ModernWorldIcon />
      </ScrollLink>
      <ScrollLink
        activeClass="active-navbar-icon"
        to="home-imaginarium"
        spy={true}
        smooth={true}
        duration={500}
      >
        <ImaginariumIcon />
      </ScrollLink>
      <ScrollLink
        activeClass="active-navbar-icon"
        to="home-ancient-world"
        spy={true}
        smooth={true}
        duration={500}
      >
        <AncientWorldIcon />
      </ScrollLink>
    </Fragment>
  );
};

export default HomeNavbar;
