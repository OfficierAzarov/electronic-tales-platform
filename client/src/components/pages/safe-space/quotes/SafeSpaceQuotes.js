import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './SafeSpaceQuotes.css';

import { getQuotes } from '../../../../redux/actions/quote';
import Quote from '../../../elements/quote/Quote';
import MiniNav from '../../../elements/mini-nav/MiniNav';
import Fab from '../../../elements/buttons/fab/Fab';
import { generateSanitizedDangerouslySetInnerHtml } from '../../../../utils/data-processing/sanitize';

const SafeSpaceQuotes = ({ quotes, getQuotes }) => {
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    getQuotes();
  }, []);

  const handleClick = () => {
    setTimeout(() => history.push('/safe-space/add-quote'), 400);
  };

  return (
    <div id="safe-space-quotes" className="container">
      <div className="line-title-wrapper world-title-wrapper">
        <h2 className="world-title neon flicker">{t('safeSpace.title')}</h2>
      </div>
      <MiniNav />
      <div className="line-title-wrapper category-title-wrapper">
        <h3 className="title"></h3>
      </div>
      <p id="subtitle" dangerouslySetInnerHTML={generateSanitizedDangerouslySetInnerHtml(t('safeSpace.microExperiences.description'))}>
      </p>
      {quotes
        .slice(0)
        .reverse()
        .map((quote, index) => (
          // index * x => just a stupid hack to make a delay of X ms for each quote
          <Quote quote={quote} key={quote._id} delay={index * 200} />
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
