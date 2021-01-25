import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './SafeSpaceQuotes.css';

import { getQuotes } from '../../../../redux/actions/quote';
import Quote from '../../../elements/quote/Quote';
import MiniNav from '../../../elements/mini-nav/MiniNav';
import Fab from '../../../elements/buttons/fab/Fab';

const SafeSpaceQuotes = ({ quotes, getQuotes }) => {
  const history = useHistory();

  useEffect(() => {
    getQuotes();
  });

  const handleClick = () => {
    setTimeout(() => history.push('/safe-space/add-quote'), 400);
  };

  return (
    <div id="safe-space-quotes">
      <MiniNav isVisible={true} />
      <h2 className="neon">Micro-vécus</h2>
      <p id="subtitle">
        Florilège des situations de tous les jours qu'on ne devrait jamais vivre dans le monde du
        dév. <br />
        <br />
        Tu as un micro-vécu à partager&nbsp;? N'hésite pas, nous la publierons anonymement ou sous
        pseudonyme.
      </p>
      {quotes.map((quote, index) => (
        // index * x => just a stupid hack to make a delay of X ms for each quote
        <Quote quote={quote} key={quote.id} delay={index * 200} />
      ))}
      <div onClick={handleClick}>
        <Fab />
      </div>
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
