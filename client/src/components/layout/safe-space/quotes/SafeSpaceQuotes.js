import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './SafeSpaceQuotes.css';

import { getQuotes } from '../../../../redux/actions/quote';
import Quote from '../../../elements/quote/Quote';
import MiniNav from '../../../elements/mini-nav/MiniNav';
import Fab from '../../../elements/fab/Fab';

const SafeSpaceQuotes = ({ quotes, getQuotes, delay }) => {
  useEffect(() => {
    getQuotes();
  });

  return (
    <div id="safe-space-quotes">
      <MiniNav isVisible={true} />
      {quotes.map((quote, index) => (
        // index * x => just a stupid hack to make a delay of X ms for each quote
        <Quote quote={quote} delay={index * 200} key={quote.id} />
      ))}
      <Link to="/safe-space/add-quote">
        <Fab />
      </Link>
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
