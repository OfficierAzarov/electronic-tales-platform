import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TinderCard from 'react-tinder-card';
import { PropTypes } from 'prop-types';
import Fade from 'react-reveal/Fade';

import {
  getTooLateToAsks,
  removeATooLateToAsk,
  setHasAlreadyBeenLoaded,
} from '../../../redux/actions/question';

import './Swipe.css';
import ghost from '../../../resources/img/icons/ghost.png';
import { IMAGES_URL, TLTA_IMAGES_URL } from '../../../utils/urls/urls';
import {
  computeLeft,
  computeWidth,
  computeHeight,
  placeElementAtBottomOfSection,
} from '../../../utils/display/positionning';
import { Fragment } from 'react';

export const Swipe = ({
  match,
  getTooLateToAsks,
  hasAlreadyBeenLoaded,
  questions,
  removeATooLateToAsk,
  setHasAlreadyBeenLoaded,
}) => {
  const [disable, setDisable] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (!hasAlreadyBeenLoaded.includes(match.params.world)) {
      getTooLateToAsks(match.params.world);
      setHasAlreadyBeenLoaded(match.params.world);
    }
  }, []);

  const handleClick = () => {
    setTimeout(() => history.push('/modern-world/swipe/add-question'), 400);
  };

  const cardRefs = Array(questions.length)
    .fill(0)
    .map(() => React.createRef());

  const swipeActionFromButton = (direction) => {
    if (questions.length) {
      const questionToRemove = questions[questions.length - 1];
      const index = questions.indexOf(questionToRemove);
      if (cardRefs[index].current) cardRefs[index].current.swipe(direction, 1500);
    }
    setDisable(true);
  };

  const onCardLeftScreen = (direction, questionToRemove) => {
    removeATooLateToAsk(questionToRemove);
    setDisable(false);
    if (direction === 'right')
      history.push(`/${match.params.world}/articles/${questionToRemove.answerSlug}`);
  };

  return (
    <div id="swipe">
      {questions.length ? (
        <div
          id="swipe-cards-container"
          style={{
            left: computeLeft(0.85),
            width: computeWidth(85),
          }}
        >
          {questions.map((question, index) => (
            <TinderCard
              key={question._id}
              onCardLeftScreen={(dir) => onCardLeftScreen(dir, question)}
              className="swipe-card"
              ref={cardRefs[index]}
            >
              <div
                className="swipe-card-content"
                style={{
                  height: computeHeight(65),
                  backgroundImage: `url(${process.env.PUBLIC_URL}/${IMAGES_URL}/${TLTA_IMAGES_URL}/forest.jpg)`,
                }}
              >
                <p className="swipe-card-content-text">
                  <span className="swipe-card-content-text-title">{question.text}</span>
                  {question.subtext}
                </p>
              </div>
            </TinderCard>
          ))}
          <div
            id="swipe-buttons-container"
            style={{
              width: computeWidth(85),
              top: placeElementAtBottomOfSection(55),
            }}
          >
            <button
              id="swipe-left-action"
              className="action-button swipe-button"
              disabled={disable}
              onClick={() => swipeActionFromButton('left')}
            >
              ❌
            </button>
            <button
              id="swipe-right-action"
              className="action-button swipe-button"
              disabled={disable}
              onClick={() => swipeActionFromButton('right')}
            >
              ❤️
            </button>
          </div>
        </div>
      ) : (
        <Fade duration={1500}>
          <div id="no-cards-left">
            <h2>There's no cards left!</h2>
            <img src={ghost} alt="no cards left" />
          </div>
          <div id="no-swipe-buttons-container">
            <button className="basic-button" onClick={() => history.goBack()}>
              Go back
            </button>
            <button id="suggest-a-question" className="basic-button" onClick={handleClick}>
              Suggest
              <br /> a&nbsp;new question
            </button>
          </div>
        </Fade>
      )}
    </div>
  );
};

Swipe.propTypes = {
  match: PropTypes.object.isRequired,
  getTooLateToAsks: PropTypes.func.isRequired,
  initialLoading: PropTypes.bool.isRequired,
  questions: PropTypes.array.isRequired,
  removeATooLateToAsk: PropTypes.func.isRequired,
  setInitialLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  questions: state.question.questions,
  hasAlreadyBeenLoaded: state.question.hasAlreadyBeenLoaded,
});

export default connect(mapStateToProps, {
  getTooLateToAsks,
  setHasAlreadyBeenLoaded,
  removeATooLateToAsk,
})(Swipe);
