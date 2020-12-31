import React from 'react';
import { Animated } from 'react-animated-css';

import './AddQuote.css';

import Add from '../../../elements/add/Add';

const AddQuote = ({ isVisible }) => {
  return (
    <Animated
      animationIn="bounceInUp"
      animationOutDuration={0}
      animationInDuration={1000}
      //   animationInDelay={delay}
      isVisible={isVisible}
      className="flex"
    >
      <div id="safe-space-add-quote">{isVisible && <Add />}</div>
    </Animated>
  );
};

export default AddQuote;
