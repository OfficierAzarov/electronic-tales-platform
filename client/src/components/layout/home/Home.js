import React, { Fragment, useEffect } from 'react';

import './Home.css';
import castle from '../../../resources/img/illustrations/castle.jpg';

const Home = () => {
  return (
    <div id="home">
      <img src={castle} alt="Electronic Tales Castle" />
    </div>
  );
};

export default Home;
