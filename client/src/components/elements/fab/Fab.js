import React from 'react';
import { Animated } from 'react-animated-css';

import './Fab.css';

import { ReactComponent as AddAction } from '../../../resources/img/icons/add.svg';

const Fab = ({ isVisible, leftPosition, topPosition }) => {
  return (
    <div
      className="fab"
      className={isVisible ? 'fab visible' : 'fab'}
      style={{ left: leftPosition, top: topPosition }}
    >
      <AddAction />
    </div>
  );
};

export default Fab;
