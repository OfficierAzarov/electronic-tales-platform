import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import ruins from '../../../resources/img/icons/ruins.png';

const DefaultNavbar = () => {
  return (
    <Fragment>
      <Link to="/">
        <img src={ruins} alt="modern world icon" />
      </Link>
      <Link to="/modern-world">
        <img src={ruins} alt="modern world icon" />
      </Link>
      <Link to="/imaginarium">
        <img src={ruins} alt="modern world icon" />
      </Link>
      <Link to="/ancient-world">
        <img src={ruins} alt="modern world icon" />
      </Link>
    </Fragment>
  );
};

export default DefaultNavbar;
