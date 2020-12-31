import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';

import './Fab.css';

import { ReactComponent as AddAction } from '../../../resources/img/icons/add.svg';

const Fab = ({ isVisible, delay }) => {
  const [isRotating, setIsRotating] = useState(false);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  useEffect(() => {
    setHasBeenClicked(false);
  }, []);

  const handleClick = () => {
    console.log('always');
    if (!hasBeenClicked) {
      console.log('only when not clicked yet');
      setIsRotating(true);
      setHasBeenClicked(true);
    }
  };

  const terminate = () => {};

  return (
    <div
      className={`fab ${isRotating ? 'rotating' : ''}`}
      onClick={() => handleClick()}
    >
      <Animated
        animationIn="bounceInUp"
        animationOut="fadeOut"
        animationOutDuration={1000}
        animationInDuration={1000}
        animationInDelay={delay}
        isVisible={isVisible}
        style={{ display: 'flex' }}
      >
        <AddAction />
      </Animated>
    </div>
  );
};

export default Fab;
