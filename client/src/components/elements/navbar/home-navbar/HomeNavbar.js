import React, { Fragment } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import './HomeNavbar.css';

import { ReactComponent as SafeSpace } from '../../../../resources/img/icons/safe-space.svg';
import modernWorld from '../../../../resources/img/icons/modern-world.png';
import imaginarium from '../../../../resources/img/icons/imaginarium.png';
import ancientWorld from '../../../../resources/img/icons/ancient-world.png';

const HomeNavbar = () => {
  return (
    <Fragment>
      <ScrollLink
        activeClass="active"
        to="home-safe-space"
        spy={true}
        smooth={true}
        duration={500}
      >
        <SafeSpace />
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="home-modern-world"
        spy={true}
        smooth={true}
        duration={500}
      >
        <img src={modernWorld} alt="modern world icon" />
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="home-imaginarium"
        spy={true}
        smooth={true}
        duration={500}
      >
        <img src={imaginarium} alt="imaginarium" />
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="home-ancient-world"
        spy={true}
        smooth={true}
        duration={500}
      >
        <img src={ancientWorld} alt="ancient world icon" />
      </ScrollLink>
    </Fragment>
  );
};

export default HomeNavbar;
