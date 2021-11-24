import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Animated } from 'react-animated-css';
import HtmlContent from '../html-content/HtmlContent';

import './Quote.css';

const Quote = ({ delay, quote, preferredLanguage }) => {
  return (
    <Animated
      animationIn="bounceInUp"
      animationOutDuration={0}
      animationInDuration={1000}
      animationInDelay={delay}
      isVisible={true}
      className="flex"
    >
      <div className="quote">
        <HtmlContent content={quote.emotion[preferredLanguage]} />
        <HtmlContent content={quote.text[preferredLanguage]} />
        <p>
          {quote.author}, {quote.date}
        </p>
      </div>
    </Animated>
  );
};

Quote.propTypes = {
  delay: PropTypes.number.isRequired,
  quote: PropTypes.object.isRequired,
  preferredLanguage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  preferredLanguage: state.language.preferredLanguage,
});

export default connect(mapStateToProps)(Quote);
