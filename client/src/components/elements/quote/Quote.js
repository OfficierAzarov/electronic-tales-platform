import React from 'react';
import { Animated } from 'react-animated-css';

import './Quote.css';

const Quote = ({ isVisible, delay, quote }) => {
  return (
    <Animated
      animationIn="bounceInUp"
      animationOutDuration={0}
      animationInDuration={1000}
      animationInDelay={delay}
      isVisible={isVisible}
      className="flex"
    >
      <div className="quote">
        <p>{quote.category}</p>
        <q>{quote.content}</q>
        <p>
          {quote.author}, {quote.date}
        </p>
      </div>
    </Animated>
  );
};

export default Quote;
