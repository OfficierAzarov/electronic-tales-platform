import React, { Fragment, useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { Animated } from 'react-animated-css';
import PropTypes from 'prop-types';

import './Lab.css';

import CardsHub from '../cards-hub/CardsHub';

const Lab = ({ text, cards }) => {
  const [isLabOpen, setIsLabOpen] = useState(false);

  return (
    <Fragment>
      <div id="lab-switch-container">
        {isLabOpen ? <span>Fermer le labo&nbsp;🗝️</span> : <span>Ouvrir le labo&nbsp;🧪</span>}
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
            <CardsHub text={text} categoryName="Labo" categoryArticles={cards} />
          </div>
        </Animated>
      )}
    </Fragment>
  );
};

Lab.propTypes = {
  text: PropTypes.string,
  cards: PropTypes.array.isRequired,
};

export default Lab;
