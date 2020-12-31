import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';

import './SafeSpace.css';

import MiniNav from '../../elements/mini-nav/MiniNav';

import SafeSpaceQuotes from './quotes/SafeSpaceQuotes';
import SafeSpaceChat from './chat/SafeSpaceChat';
import AddQuote from './add-quote/AddQuote';
import Fab from '../../elements/fab/Fab';

const SafeSpace = () => {
  return (
    <div id="safe-space">
      <Link to="/safe-space/quotes">
        <Animated
          animationOut="fadeOut"
          animationOutDuration={500}
          isVisible={true}
          className="flex minimal-height"
        >
          <div id="swipe-up">Swipe up</div>
        </Animated>
      </Link>
      {/* <SafeSpaceQuotes
        isVisible={whatToShow === 'quotes' ? true : false}
        delay={delay}
      />
      <AddQuote isVisible={whatToShow === 'add-quote' ? true : false} />
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
      <div onClick={(e) => show('add-quote', e)}>
        <Fab
          isVisible={whatToShow === 'quotes' ? true : false}
          delay={delay + 200}
          bottomPosition={'12vh'}
          leftPosition={'82vw'}
        />
      </div> */}
    </div>
  );
};

export default SafeSpace;
