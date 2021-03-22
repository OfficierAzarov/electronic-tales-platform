import React from 'react';
import { Animated } from 'react-animated-css';
import { PropTypes } from 'prop-types';

import './FormWrapper.css';

import GoBackButton from '../../../buttons/go-back/GoBackButton';

const Add = ({ children, isVisible, tellVisibilityChange }) => {
  return (
    <div id="form-wrapper">
      <Animated
        animationIn="bounceInLeft"
        animationOut="bounceOutLeft"
        animationInDelay={200}
        animationInDuration={600}
        animationOutDelay={300}
        isVisible={isVisible}
      >
        <div
          id="actions-container"
          onClick={() => {
            tellVisibilityChange(false);
          }}
        >
          <div id="go-back">
            <GoBackButton timeOut={600} />
          </div>
        </div>
      </Animated>
      <Animated
        animationIn="bounceInLeft"
        animationOut="bounceOutLeft"
        animationInDuration={600}
        animationInDelay={0}
        isVisible={isVisible}
        className="flex-center"
      >
        {children}
      </Animated>
    </div>
  );
};

Add.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  tellVisibilityChange: PropTypes.func,
};

export default Add;
