import React, { Fragment } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import './HomeNavbar.css';

import modernWorld from '../../../resources/img/icons/modern-world.png';
import imaginarium from '../../../resources/img/icons/imaginarium.png';
import ancientWorld from '../../../resources/img/icons/ancient-world.png';

const HomeNavbar = () => {
  return (
    <Fragment>
      <ScrollLink
        activeClass="active"
        to="modern-world"
        spy={true}
        smooth={true}
        duration={500}
      >
        <img src={modernWorld} alt="modern world icon" />
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="imaginarium"
        spy={true}
        smooth={true}
        duration={500}
      >
        <img src={imaginarium} alt="imaginarium" />
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="ancient-world"
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
