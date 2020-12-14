import React, { Fragment } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import './HomeNavbar.css';

import { ReactComponent as SafeSpace } from '../../../../resources/img/icons/safe-space.svg';
import { ReactComponent as ModernWorld } from '../../../../resources/img/icons/modern-world.svg';
import { ReactComponent as Imaginarium } from '../../../../resources/img/icons/imaginarium.svg';
import { ReactComponent as AncientWorld }  from '../../../../resources/img/icons/ancient-world.svg';


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
        <ModernWorld />
        {/* <img src={modernWorld} alt="modern world icon" /> */}
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="home-imaginarium"
        spy={true}
        smooth={true}
        duration={500}
      >
        <Imaginarium />
        {/* <img src={imaginarium} alt="imaginarium" /> */}
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="home-ancient-world"
        spy={true}
        smooth={true}
        duration={500}
      >
        <AncientWorld />
        {/* <img src={ancientWorld} alt="ancient world icon" /> */}
      </ScrollLink>
    </Fragment>
  );
};

export default HomeNavbar;
