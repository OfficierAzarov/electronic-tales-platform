import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setHomeAsCurrentPage, unsetHomeAsCurrentPage } from '../../../redux/actions/page';

import './Home.css';
import castle from '../../../resources/img/illustrations/castle.jpg';
import { ReactComponent as MansionSVG } from '../../../resources/img/illustrations/mansion3.svg';
//  Mansion from '../../interactive-images/mansion/Mansion';
import logo from '../../../resources/img/logo-transparent.png';

const Home = ({ setHomeAsCurrentPage, unsetHomeAsCurrentPage }) => {
  useEffect(() => {
    setHomeAsCurrentPage();
    return () => {
      unsetHomeAsCurrentPage();
    };
  }, []);

  return (
    <div id="home">
      {/* <Mansion /> */}
      <MansionSVG />
      {/* <div className="full-height temporary-comestics home-door" id="header"> */}
      {/* <img src={castle} alt="Electronic Tales Castle" /> */}
      {/* </div> */}
      <div id="home-worlds-container">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="full-height temporary-comestics home-door" id="home-safe-space">
          <h2>Dégommons le syndrome de l'imposteur ensemble.</h2>
          <p>
            Développeur·euse junior, tu souffres du syndrome de l'imposteur&nbsp;?
            <br />
            <br />À Electronic Tales, nous pensons que ce n'est pas une fatalité.
          </p>
          <Link to="/safe-space" className="basic-button">
            Viens, on en parle.
          </Link>
        </div>
        <div className="full-height temporary-comestics home-door" id="home-modern-world">
          <h2>Modern World</h2>
          <Link to="/modern-world" className="basic-button">
            Enter
          </Link>
        </div>
        <div className="full-height temporary-comestics home-door" id="home-imaginarium">
          <h2>Imaginarium</h2>
          <Link to="/imaginarium" className="basic-button">
            Enter
          </Link>
        </div>
        <div className="full-height temporary-comestics home-door" id="home-ancient-world">
          <h2>Ancient World</h2>
          <Link to="/ancient-world" className="basic-button">
            Enter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { setHomeAsCurrentPage, unsetHomeAsCurrentPage })(Home);
