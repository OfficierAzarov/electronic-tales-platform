import React from 'react';
import { Animated } from 'react-animated-css';

import './Quote.css';

const Quote = ({ quote }) => {
  return (
    <div className="quote">
      <p>{quote.category}</p>
      <q>{quote.content}</q>
      <p>
        {quote.author}, {quote.date}
      </p>
    </div>
  );
};

export default Quote;
