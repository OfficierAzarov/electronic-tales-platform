import React, { useEffect } from 'react';
import { Animated } from 'react-animated-css';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './SafeSpaceQuotes.css';

import { getQuotes } from '../../../../redux/actions/quote';
import Quote from '../../../elements/quote/Quote';
import Fab from '../../../elements/fab/Fab';

const SafeSpaceQuotes = ({ isVisible, quotes, getQuotes, delay }) => {
  useEffect(() => {
    getQuotes();
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Animated
      animationIn="bounceInUp"
      animationOutDuration={0}
      animationInDuration={1000}
      animationInDelay={delay}
      isVisible={isVisible}
      className="flex"
    >
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
    </Animated>
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
