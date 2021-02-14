import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';

import './Fab.css';

import { ReactComponent as AddAction } from '../../../../resources/img/icons/add.svg';

const Fab = ({ isVisible, delay }) => {
  const [isRotating, setIsRotating] = useState(false);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  useEffect(() => {
    setHasBeenClicked(false);
  }, []);

  const handleClick = () => {
    if (!hasBeenClicked) {
      setIsRotating(true);
      setHasBeenClicked(true);
    }
  };

  return (
    <a className={`fab ${isRotating ? 'rotating' : ''}`} onClick={() => handleClick()}>
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
    </a>
  );
};

export default Fab;
