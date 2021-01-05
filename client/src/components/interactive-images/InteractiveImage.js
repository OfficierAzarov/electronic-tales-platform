import React, { useState } from 'react';

import DirtyRoadmap from '../../components/interactive-images/DirtyRoadmap';
import Checking from './Checking';

const InteractiveImage = () => {
  const [visibleElement, setVisibleElement] = useState('dirtyRoadmap');

  const handleClickFromChild = (visibleElement) => {
    setVisibleElement(visibleElement);
  };

  return (
    <div>
      <DirtyRoadmap
        handleClick={handleClickFromChild}
        isVisible={visibleElement === 'dirtyRoadmap' ? true : false}
      />
      <Checking
        handleClick={handleClickFromChild}
        isVisible={visibleElement === 'checking' ? true : false}
      />
    </div>
  );
};

export default InteractiveImage;
