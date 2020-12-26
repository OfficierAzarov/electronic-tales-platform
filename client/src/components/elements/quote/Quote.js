import React from 'react';
import { Animated } from 'react-animated-css';

import './Quote.css';

const Quote = ({ isVisible, quote }) => {
  return (
    <Animated
      animationIn="bounceInUp"
      animationOutDuration={0}
      animationInDuration={1000}
      animationInDelay={600}
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
