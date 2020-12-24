import React, { useState } from 'react';
import { Animated } from 'react-animated-css';

import './SafeSpace.css';

import { ReactComponent as FakeIcon } from '../../../resources/img/icons/safe-space.svg';

export default function SafeSpace() {
  const [isVisible, setIsVisible] = useState(false);

  const move = () => {
    setIsVisible(true);
  };

  return (
    <div id="safe-space" onScroll={move}>
      <Animated
        animationOut="fadeOut"
        animationOutDuration={500}
        isVisible={!isVisible}
        className="flex minimal-height"
      >
        <div id="swipe-up" onClick={move}>
          Swipe up
        </div>
      </Animated>
      <Animated
        animationIn="bounceInUp"
        animationOut="fadeOutDown"
        animationInDuration={1000}
        animationInDelay={400}
        isVisible={isVisible}
      >
        <div id="mini-nav">
          <FakeIcon />
          <FakeIcon />
          <FakeIcon />
        </div>
      </Animated>
    </div>
  );
}
