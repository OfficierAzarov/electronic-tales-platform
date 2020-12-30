import React, { useState } from 'react';
import { Animated } from 'react-animated-css';

import './Fab.css';

import { ReactComponent as AddAction } from '../../../resources/img/icons/add.svg';

const Fab = ({ isVisible, delay, bottomPosition, leftPosition }) => {
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    console.log('bip');
    setIsRotating(true);
  };

  const terminate = () => {};

  return (
    <div
      style={{ position: 'fixed', bottom: bottomPosition, left: leftPosition }}
      className={`fab  ${isVisible ? 'visible' : 'fab'} 
    ${isRotating ? 'rotating' : ''}`}
      onClick={() => handleClick()}
    >
      <Animated
        animationIn="bounceInUp"
        animationOutDuration={0}
        animationInDuration={1000}
        animationInDelay={delay + 400}
        isVisible={isVisible}
        style={{ display: 'flex' }}
      >
        <AddAction />
      </Animated>
    </div>
  );
};

export default Fab;
