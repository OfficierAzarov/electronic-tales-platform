import React, { useEffect } from 'react';
import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';

import './SafeSpace.css';

// import MiniNav from '../../elements/mini-nav/MiniNav';

// import SafeSpaceQuotes from './quotes/SafeSpaceQuotes';
// import SafeSpaceChat from './chat/SafeSpaceChat';
// import AddQuote from './add-quote/AddQuote';
// import Fab from '../../elements/fab/Fab';

const SafeSpace = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
    </div>
  );
};

export default SafeSpace;
