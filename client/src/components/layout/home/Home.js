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
          Développeur·euse junior, tu ne te sens pas toujours à ta place dans le milieu de la tech&nbsp;?<br/><br/> Tu as l'impression de ne pas être à la hauteur&nbsp;?<br/><br/>De ne pas assez bien coder, de ne pas connaître assez de technos, de ne pas être assez geek&nbsp;?<br/><br/>
          Tu souffres peut-être du syndrome de l'imposteur, un mal répandu chez les développeur·euses.<br/><br/>
          À Electronic Tales, nous pensons que ce n'est pas une fatalité.
        </p>
        <Link className="basic-button" to="/safe-space">Viens, on en parle.</Link>
      </div>
      <div className="full-height temporary-comestics home-door" id="home-modern-world">
        <h1>Modern World</h1>
        <Link to="/modern-world">Enter</Link>
      </div>
      <div className="full-height temporary-comestics home-door" id="home-imaginarium">
        <h1>Imaginarium</h1>
        <Link to="/imaginarium">Enter</Link>
      </div>
      <div className="full-height temporary-comestics home-door" id="home-ancient-world">
        <h1>Ancient World</h1>
        <Link to="/ancient-world">Enter</Link>
      </div>
    </div>
  );
};

export default connect(null, { setHomeAsCurrentPage, unsetHomeAsCurrentPage })(
  Home
);
