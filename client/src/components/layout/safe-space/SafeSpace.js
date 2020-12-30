import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';

import { computeTop } from '../../../utils/display/positionFab';

import './SafeSpace.css';

import { ReactComponent as FakeIcon } from '../../../resources/img/icons/safe-space.svg';
import SafeSpaceQuotes from './quotes/SafeSpaceQuotes';
import SafeSpaceChat from './chat/SafeSpaceChat';
import Fab from '../../elements/fab/Fab';

const SafeSpace = () => {
  const [whatToShow, setWhatToShow] = useState('');
  const [activeIcon, setActiveIcon] = useState('');
  const [delay, setDelay] = useState(0);
  const [componentHeight, setComponentHeight] = useState(0);

  useEffect(() => {
    // computeTop is used as a parameter for computeTop()
    setComponentHeight(document.getElementById('safe-space').clientHeight);
  }, []);

  const show = (subSpace, e) => {
    setActiveIcon(subSpace);
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
        isVisible={whatToShow !== '' ? true : false}
      >
        <div id="mini-nav">
          <FakeIcon
            onClick={(e) => show('quotes', e)}
            className={activeIcon === 'quotes' ? 'active-icon' : ''}
          />
          <FakeIcon
            onClick={(e) => show('chat', e)}
            className={activeIcon === 'chat' ? 'active-icon' : ''}
          />
        </div>
      </Animated>
      <SafeSpaceQuotes
        isVisible={whatToShow === 'quotes' ? true : false}
        delay={delay}
      />
      <SafeSpaceChat
        isVisible={whatToShow === 'chat' ? true : false}
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
      <Animated
        animationIn="bounceInUp"
        animationOutDuration={0}
        animationInDuration={1000}
        animationInDelay={delay + 400}
        isVisible={whatToShow === 'quotes' ? true : false}
        style={{ position: 'fixed' }}
      >
        <Fab
          isVisible={whatToShow === 'quotes' ? true : false}
          delay={delay}
          leftPosition={'7.3em'}
          topPosition={computeTop(componentHeight)}
        />
      </Animated>
    </div>
  );
};

export default SafeSpace;
