import React, { Fragment } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import './HomeNavbar.css';

import { ReactComponent as SafeSpaceIcon } from '../../../../resources/img/icons/v2/safespace-opt.svg';
import { ReactComponent as ModernWorldIcon } from '../../../../resources/img/icons/v2/modernworld-screen-original.svg';
import ImaginariumSVG from '../../../../resources/img/icons/v2/ImaginariumSVG';
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
        <sub>Safe space</sub>
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
        <sub>Modern world</sub>
      </ScrollLink>
      <ScrollLink
        activeClass="active-navbar-icon"
        to="home-imaginarium"
        spy={true}
        smooth={true}
        duration={500}
        offset={offset}
      >
        <ImaginariumSVG />
        <sub>Imaginarium</sub>
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
        <sub>Ancient world</sub>
      </ScrollLink>
    </Fragment>
  );
};

export default HomeNavbar;
