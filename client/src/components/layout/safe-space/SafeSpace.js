import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';

import './SafeSpace.css';

import { ReactComponent as FakeIcon } from '../../../resources/img/icons/safe-space.svg';
import Quote from '../../elements/quote/Quote';

export default function SafeSpace() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {});

  const move = () => {
    console.log('dzouigi');
    setIsVisible(true);
  };

  return (
    <div id="safe-space">
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
        animationOutDuration={0}
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
      <Quote isVisible={isVisible} />
      <Quote isVisible={isVisible} />
      <Quote isVisible={isVisible} />
      <Quote isVisible={isVisible} />
      <Quote isVisible={isVisible} />
      {/* <Animated
        animationIn="bounceInUp"
        animationOutDuration={0}
        animationInDuration={1000}
        animationInDelay={600}
        isVisible={isVisible}
      >
        <div className="quote">
          <q>Je vais au salon la boule au ventre.</q>
          <p>Monday H.</p>
        </div>
      </Animated>
      <Animated
        animationIn="bounceInUp"
        animationOutDuration={0}
        animationInDuration={1000}
        animationInDelay={600}
        isVisible={isVisible}
      >
        <div className="quote">
          <q>Je vais au salon la boule au ventre.</q>
          <p>Monday H.</p>
        </div>
      </Animated>
      <Animated
        animationIn="bounceInUp"
        animationOutDuration={0}
        animationInDuration={1000}
        animationInDelay={600}
        isVisible={isVisible}
      >
        <div className="quote">
          <q>Je vais au salon la boule au ventre.</q>
          <p>Monday H.</p>
        </div>
      </Animated>
      <Animated
        animationIn="bounceInUp"
        animationOutDuration={0}
        animationInDuration={1000}
        animationInDelay={600}
        isVisible={isVisible}
      >
        <div className="quote">
          <q>Je vais au salon la boule au ventre.</q>
          <p>Monday H.</p>
        </div>
      </Animated>
      <Animated
        animationIn="bounceInUp"
        animationOutDuration={0}
        animationInDuration={1000}
        animationInDelay={600}
        isVisible={isVisible}
      >
        <div className="quote">
          <q>Je vais au salon la boule au ventre.</q>
          <p>Monday H.</p>
        </div>
      </Animated>
      <Animated
        animationIn="bounceInUp"
        animationOutDuration={0}
        animationInDuration={1000}
        animationInDelay={600}
        isVisible={isVisible}
      >
        <div className="quote">
          <q>Je vais au salon la boule au ventre.</q>
          <p>Monday H.</p>
        </div>
      </Animated> */}
    </div>
  );
}
