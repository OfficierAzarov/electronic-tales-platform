import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import castle from '../../../resources/img/illustrations/castle.jpg';

const Home = () => {
  return (
    <Fragment>
      <div id="home" className="full-height">
        <img src={castle} alt="Electronic Tales Castle" />
      </div>
      <div className="full-height" id="modern-world">
        <h1>Modern World</h1>
        <Link to="/modern-world">Enter</Link>
      </div>
      <div className="full-height" id="imaginarium">
        <h1>Imaginarium</h1>
        <Link to="/imaginarium">Enter</Link>
      </div>
      <div className="full-height" id="ancient-world">
        <h1>Ancient World</h1>
        <Link to="/ancient-world">Enter</Link>
      </div>
    </Fragment>
  );
};

export default Home;
