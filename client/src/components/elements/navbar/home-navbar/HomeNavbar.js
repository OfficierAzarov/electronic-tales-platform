import React, { Fragment } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import './HomeNavbar.css';

import { ReactComponent as SafeSpaceIcon } from '../../../../resources/img/icons/safe-space.svg';
import { ReactComponent as ModernWorldIcon } from '../../../../resources/img/icons/modern-world.svg';
import { ReactComponent as ImaginariumIcon } from '../../../../resources/img/icons/imaginarium.svg';
import { ReactComponent as AncientWorldIcon } from '../../../../resources/img/icons/ancient-world.svg';
import { viewportToPixels } from '../../../../utils/display/converter';

const HomeNavbar = () => {
  const offset = -1 * viewportToPixels('25vh');

  return (
    <Fragment>
      <ScrollLink
        activeClass="active-navbar-icon"
        to="home-safe-space"
        spy={true}
        smooth={true}
        duration={500}
        offset={offset}
      >
        <SafeSpaceIcon />
      </ScrollLink>
      <ScrollLink
        activeClass="active-navbar-icon"
        to="home-modern-world"
        spy={true}
        smooth={true}
        duration={500}
        offset={offset}
      >
        <ModernWorldIcon />
      </ScrollLink>
      <ScrollLink
        activeClass="active-navbar-icon"
        to="home-imaginarium"
        spy={true}
        smooth={true}
        duration={500}
        offset={offset}
      >
        <ImaginariumIcon />
      </ScrollLink>
      <ScrollLink
        activeClass="active-navbar-icon"
        to="home-ancient-world"
        spy={true}
        smooth={true}
        duration={500}
        offset={offset}
      >
        <AncientWorldIcon />
      </ScrollLink>
    </Fragment>
  );
};

export default HomeNavbar;
