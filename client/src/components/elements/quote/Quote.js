import React from 'react';
import { Animated } from 'react-animated-css';

import './Quote.css';

const Quote = ({ isVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
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
  );
};

export default Quote;
