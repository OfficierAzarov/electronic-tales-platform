import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import './Navbar.css';
import ruins from '../../../resources/img/icons/ruins.png';

// const ScrollLink = Scroll.Link;

const Navbar = () => {
  return (
    <nav>
      <ScrollLink
        activeClass="active"
        to="ancient-world"
        spy={true}
        smooth={true}
        duration={500}
      >
        <img src={ruins} alt="ancient world icon" />
      </ScrollLink>
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
      <img src={ruins} alt="my space" />
    </nav>
  );
};

export default Navbar;
