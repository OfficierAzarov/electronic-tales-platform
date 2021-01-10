import React, { useEffect } from 'react';
import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';

import './SafeSpace.css';

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
