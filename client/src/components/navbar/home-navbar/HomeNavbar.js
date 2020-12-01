import React, { Fragment } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import ruins from '../../../resources/img/icons/ruins.png';

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
        <img src={ruins} alt="modern world icon" />
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="imaginarium"
        spy={true}
        smooth={true}
        duration={500}
      >
        <img src={ruins} alt="imaginarium" />
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="ancient-world"
        spy={true}
        smooth={true}
        duration={500}
      >
        <img src={ruins} alt="ancient world icon" />
      </ScrollLink>
    </Fragment>
  );
};

export default HomeNavbar;
