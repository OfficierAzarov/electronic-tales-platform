import React from 'react';
import Fade from 'react-reveal/Fade';
import RoadmapCleanCode from '../../../interactive-images/RoadmapCleanCode';

import './AncientWorld.css';

const AncientWorld = () => {
  return (
    <Fade duration={1500}>
      <div>
        <h1>Ancient world</h1>
        <RoadmapCleanCode />
      </div>
    </Fade>
  );
};

export default AncientWorld;
