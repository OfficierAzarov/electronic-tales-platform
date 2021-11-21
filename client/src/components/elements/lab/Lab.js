import React, { Fragment, useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { Animated } from 'react-animated-css';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { generateSanitizedDangerouslySetInnerHtml } from '../../../utils/data-processing/sanitize';

import './Lab.css';

import CardsHub from '../cards-hub/CardsHub';
import testTube from '../../../resources/img/icons/test-tube.png';

const Lab = ({ text, cards, preferredLanguage }) => {
  const [isLabOpen, setIsLabOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <Fragment>
      <div id="lab-switch-container">
        {isLabOpen ? (
          <span>{t('common.lab.close')}&nbsp;🗝️</span>
        ) : (
          <span>
            {t('common.lab.open')}&nbsp;
            <img src={testTube} loading="auto" alt="open the lab test tube emoji" />{' '}
          </span>
        )}
        <Toggle
          defaultChecked={isLabOpen}
          className="custom-toggle"
          onChange={() => setIsLabOpen(!isLabOpen)}
          icons={{
            checked: '',
            unchecked: '',
          }}
        />
      </div>
      {isLabOpen && (
        <Animated animationIn="bounceInLeft" animationInDuration={1200} isVisible={isLabOpen}>
          <div id="lab-content">
            <CardsHub
              text={text}
              categoryName="Labo"
              categoryArticles={cards}
              preferredLanguage={preferredLanguage}
            />
          </div>
        </Animated>
      )}
    </Fragment>
  );
};

Lab.propTypes = {
  text: PropTypes.string,
  cards: PropTypes.array.isRequired,
  preferredLanguage: PropTypes.string.isRequired,
};

export default Lab;
