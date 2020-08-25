import React, { Fragment } from 'react';

import './Home.css';
import castle from '../../../resources/img/illustrations/castle.jpg';

const Home = () => {
  return (
    <Fragment>
      <img src={castle} alt="Electronic Tales Castle" />
    </Fragment>
  );
};

export default Home;
