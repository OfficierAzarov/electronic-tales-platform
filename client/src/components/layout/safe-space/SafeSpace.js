import React, { useState } from 'react';
import { Animated } from 'react-animated-css';

import './SafeSpace.css';

import { ReactComponent as FakeIcon } from '../../../resources/img/icons/safe-space.svg';
import SafeSpaceQuotes from './quotes/SafeSpaceQuotes';
import SafeSpaceDiscord from './discord/SafeSpaceDiscord';

const SafeSpace = () => {
  const [isMiniNavVisible, setIsMiniNavVisible] = useState(false);
  const [whatToShow, setWhatToShow] = useState('');
  const [activeIcon, setActiveIcon] = useState('');
  const [delay, setDelay] = useState(0);

  const showNav = () => {
    setIsMiniNavVisible(true);
  };

  const show = (subSpace, e) => {
    setActiveIcon(subSpace);
    showNav();
    setWhatToShow(subSpace);
    configureDelay(e);
  };

  const configureDelay = (e) => {
    setDelay(0);
    if (e.target.id === 'swipe-up') setDelay(800);
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
            onClick={(e) => show('add-quote', e)}
            className={activeIcon === 'add-quote' ? 'active-icon' : ''}
          />
          <FakeIcon
            onClick={(e) => show('quotes', e)}
            className={activeIcon === 'quotes' ? 'active-icon' : ''}
          />
          <FakeIcon
            onClick={(e) => show('discord', e)}
            className={activeIcon === 'discord' ? 'active-icon' : ''}
          />
        </div>
      </Animated>
      <SafeSpaceQuotes
        isVisible={whatToShow === 'quotes' ? true : false}
        delay={delay}
      />
      <SafeSpaceDiscord
        isVisible={whatToShow === 'discord' ? true : false}
        delay={delay}
      />
      <Animated
        animationOut="fadeOut"
        animationOutDuration={500}
        isVisible={whatToShow === '' ? true : false}
        className="flex minimal-height"
      >
        <div id="swipe-up" onClick={(e) => show('quotes', e)}>
          Swipe up
        </div>
      </Animated>
    </div>
  );
};

export default SafeSpace;
