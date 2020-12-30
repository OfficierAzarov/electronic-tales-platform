import React, { useState } from 'react';
import { bounce } from 'react-animations';

import './Fab.css';

import { ReactComponent as AddAction } from '../../../resources/img/icons/add.svg';

const Fab = ({ isVisible, leftPosition, topPosition }) => {
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    console.log('bip');
    setIsRotating(true);
  };

  return (
    <div
      className={`fab  ${isVisible ? 'visible' : 'fab'} 
              ${isRotating ? 'rotating' : ''}`}
      style={{ left: leftPosition, top: topPosition }}
      onClick={() => handleClick()}
    >
      <AddAction />
    </div>
  );
};

export default Fab;
