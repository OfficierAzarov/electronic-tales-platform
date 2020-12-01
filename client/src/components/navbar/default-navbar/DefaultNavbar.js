import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './DefaultNavbar.css';

import home from '../../../resources/img/icons/home.png';
import modernWorld from '../../../resources/img/icons/modern-world.png';
import imaginarium from '../../../resources/img/icons/imaginarium.png';
import ancientWorld from '../../../resources/img/icons/ancient-world.png';

const DefaultNavbar = () => {
  return (
    <Fragment>
      <Link to="/">
        <img src={home} alt="modern world icon" />
      </Link>
      <Link to="/modern-world">
        <img src={modernWorld} alt="modern world icon" />
      </Link>
      <Link to="/imaginarium">
        <img src={imaginarium} alt="imaginarium icon" />
      </Link>
      <Link to="/ancient-world">
        <img src={ancientWorld} alt="ancient world icon" />
      </Link>
    </Fragment>
  );
};

export default DefaultNavbar;
