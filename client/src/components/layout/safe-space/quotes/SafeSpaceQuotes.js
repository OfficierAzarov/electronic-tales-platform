import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Animated } from 'react-animated-css';

import './SafeSpaceQuotes.css';

import { getQuotes } from '../../../../redux/actions/quote';
import { ReactComponent as FakeIcon } from '../../../../resources/img/icons/safe-space.svg';
import Quote from '../../../elements/quote/Quote';

const SafeSpaceQuotes = ({ quotes, getQuotes }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    getQuotes();
  });

  const move = () => {
    setIsVisible(true);
  };

  return (
    <div id="safe-space">
      <Animated
        animationOut="fadeOut"
        animationOutDuration={500}
        isVisible={!isVisible}
        className="flex minimal-height"
      >
        <div id="swipe-up" onClick={move}>
          Swipe up
        </div>
      </Animated>
      <Animated
        animationIn="bounceInUp"
        animationOutDuration={0}
        animationInDuration={1000}
        animationInDelay={400}
        isVisible={isVisible}
      >
        <div id="mini-nav">
          <FakeIcon />
          <FakeIcon />
          <FakeIcon />
        </div>
      </Animated>
      {quotes.map((quote) => (
        <Quote quote={quote} isVisible={isVisible} key={quote.id} />
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
