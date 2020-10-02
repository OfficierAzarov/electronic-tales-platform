import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setHomeAsCurrentPage } from '../../../actions/page';
import { unsetHomeAsCurrentPage } from '../../../actions/page';

import './Home.css';
import castle from '../../../resources/img/illustrations/castle.jpg';

const Home = ({ setHomeAsCurrentPage, unsetHomeAsCurrentPage }) => {
  useEffect(() => {
    setHomeAsCurrentPage();
    return () => {
      unsetHomeAsCurrentPage();
    };
  }, []);

  return (
    <div id="home">
      <div className="full-height temporary-comestics" id="header">
        <img src={castle} alt="Electronic Tales Castle" />
      </div>
      <div className="full-height temporary-comestics" id="modern-world">
        <h1>Modern World</h1>
        <Link to="/modern-world">Enter</Link>
      </div>
      <div className="full-height temporary-comestics" id="imaginarium">
        <h1>Imaginarium</h1>
        <Link to="/imaginarium">Enter</Link>
      </div>
      <div className="full-height temporary-comestics" id="ancient-world">
        <h1>Ancient World</h1>
        <Link to="/ancient-world">Enter</Link>
      </div>
    </div>
  );
};

export default connect(null, { setHomeAsCurrentPage, unsetHomeAsCurrentPage })(
  Home
);
