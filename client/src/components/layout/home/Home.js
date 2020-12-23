import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setHomeAsCurrentPage, unsetHomeAsCurrentPage } from '../../../redux/actions/page';

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
      <div className="full-height temporary-comestics home-door" id="header">
        <img src={castle} alt="Electronic Tales Castle" />
      </div>
      <div className="full-height temporary-comestics home-door" id="home-safe-space">
        <h1>Dégommons le syndrome de l'imposteur ensemble.</h1>
        <p>
          Développeur·euse junior, tu souffres du syndrome de l'imposteur&nbsp;?<br/><br/>
          À Electronic Tales, nous pensons que ce n'est pas une fatalité.
        </p>
        <Link className="basic-button" to="/safe-space">Viens, on en parle.</Link>
      </div>
      <div className="full-height temporary-comestics home-door" id="home-modern-world">
        <h1>Modern World</h1>
        <Link to="/modern-world" className="basic-button">Enter</Link>
      </div>
      <div className="full-height temporary-comestics home-door" id="home-imaginarium">
        <h1>Imaginarium</h1>
        <Link to="/imaginarium" className="basic-button">Enter</Link>
      </div>
      <div className="full-height temporary-comestics home-door" id="home-ancient-world">
        <h1>Ancient World</h1>
        <Link to="/ancient-world" className="basic-button">Enter</Link>
      </div>
    </div>
  );
};

export default connect(null, { setHomeAsCurrentPage, unsetHomeAsCurrentPage })(
  Home
);
