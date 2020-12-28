import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Animated } from 'react-animated-css';

import './SafeSpaceQuotes.css';

import { getQuotes } from '../../../../redux/actions/quote';
import Quote from '../../../elements/quote/Quote';

const SafeSpaceQuotes = ({ isVisible, quotes, getQuotes, delay }) => {
  useEffect(() => {
    getQuotes();
  });

  return (
    <div id="safe-space-quotes" className={isVisible ? 'visible' : null}>
      {quotes.map((quote) => (
        <Quote
          quote={quote}
          isVisible={isVisible}
          delay={delay}
          key={quote.id}
        />
      ))}
    </div>
  );
};

SafeSpaceQuotes.propTypes = {
  quotes: PropTypes.array.isRequired,
  getQuotes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  quotes: state.quote.quotes,
});

export default connect(mapStateToProps, { getQuotes })(SafeSpaceQuotes);
