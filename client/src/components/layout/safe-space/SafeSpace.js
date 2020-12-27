import React, { useState } from 'react';
import { Animated } from 'react-animated-css';

import './SafeSpace.css';

import { ReactComponent as FakeIcon } from '../../../resources/img/icons/safe-space.svg';
import SafeSpaceQuotes from './quotes/SafeSpaceQuotes';

const SafeSpace = () => {
  const [isMiniNavVisible, setIsMiniNavVisible] = useState(false);
  const [whatToShow, setWhatToShow] = useState('');
  const [activeIcon, setActiveIcon] = useState('');

  const showNav = () => {
    setIsMiniNavVisible(true);
  };

  const show = (subSpace) => {
    setActiveIcon(subSpace);
    showNav();
    setWhatToShow(subSpace);
  };

  return (
    <div id="safe-space">
      <Animated
        animationIn="bounceInUp"
        animationOutDuration={0}
        animationInDuration={1000}
        animationInDelay={400}
        isVisible={isMiniNavVisible}
      >
        <div id="mini-nav">
          <FakeIcon
            onClick={() => show('add-quote')}
            className={activeIcon === 'add-quote' ? 'active-icon' : ''}
          />
          <FakeIcon
            onClick={() => show('quotes')}
            className={activeIcon === 'quotes' ? 'active-icon' : ''}
          />
          <FakeIcon
            onClick={() => show('discord')}
            className={activeIcon === 'discord' ? 'active-icon' : ''}
          />
        </div>
      </Animated>
      <SafeSpaceQuotes
        isVisible={whatToShow === 'quotes' ? true : false}
        delay={800}
      />
      <Animated
        animationOut="fadeOut"
        animationOutDuration={500}
        isVisible={whatToShow === '' ? true : false}
        className="flex minimal-height"
      >
        <div id="swipe-up" onClick={() => show('quotes')}>
          Swipe up
        </div>
      </Animated>
    </div>
  );
};

export default SafeSpace;
