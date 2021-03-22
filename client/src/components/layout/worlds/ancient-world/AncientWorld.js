import React from 'react';
import Fade from 'react-reveal/Fade';

import './AncientWorld.css';

import mamieCobol from '../../../../resources/img/illustrations/mcsorrycut.png';

const AncientWorld = () => {
  return (
    <Fade duration={1500}>
      <div id="ancient-world" className="world-page container">
        <div className="line-title-wrapper world-title-wrapper">
          <h2 className="world-title">Imaginarium</h2>
        </div>
        <img src={mamieCobol} alt="" />
      </div>
    </Fade>
  );
};

export default AncientWorld;
