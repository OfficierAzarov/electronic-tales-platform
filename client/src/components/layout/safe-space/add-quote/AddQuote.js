import React from 'react';
import { Animated } from 'react-animated-css';
import { useHistory } from 'react-router-dom';

import './AddQuote.css';

import Add from '../../../elements/add/Add';

const AddQuote = () => {
  const history = useHistory();

  return (
    <div id="safe-space-add-quote">
      <Animated
        animationIn="bounceInLeft"
        animationInDuration={600}
        animationInDelay={400}
        isVisible={true}
      >
        <div id="actions-container">
          <div
            id="go-back"
            className="mini-nav"
            onClick={() => history.goBack()}
          >
            Go back
          </div>
        </div>
      </Animated>
      <Animated
        animationIn="bounceInLeft"
        animationInDuration={600}
        animationInDelay={0}
        isVisible={true}
      >
        <div id="add-container">
          <Add />
        </div>
      </Animated>
    </div>
  );
};

export default AddQuote;
