import React, { useState, useEffect } from 'react';

import './Fab.css';

import { ReactComponent as AddAction } from '../../../resources/img/icons/add.svg';

const Fab = ({ bottom, left }) => {
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
      style={{ bottom: bottom, left: left }}
    >
      <AddAction />
    </div>
  );
};

export default Fab;
