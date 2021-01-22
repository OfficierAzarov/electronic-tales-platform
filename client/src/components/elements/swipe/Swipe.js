import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TinderCard from 'react-tinder-card';

import {
  getTooLateToAsks,
  removeATooLateToAsk,
  setInitialLoading,
} from '../../../redux/actions/question';

import './Swipe.css';
import ghost from '../../../resources/img/icons/ghost.png';
import { IMAGES_URL, ICONS_IMAGES_URL } from '../../../utils/urls/urls';
import {
  computeLeft,
  computeWidth,
  computeHeight,
  placeElementAtBottomOfSection,
} from '../../../utils/display/positionning';

export const Swipe = ({
  getTooLateToAsks,
  initialLoading,
  questions,
  removeATooLateToAsk,
  setInitialLoading,
}) => {
  const [disable, setDisable] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (initialLoading) {
      getTooLateToAsks();
      setInitialLoading(false);
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
      history.push(`/modern-world/articles/swipe-answers/${questionToRemove.answer.slug}`);
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
              onCardLeftScreen={(dir) => onCardLeftScreen(dir, question)}
              className="swipe-card"
              key={question.id}
              ref={cardRefs[index]}
            >
              <div
                className="swipe-card-content"
                style={{
                  height: computeHeight(65),
                }}
              >
                <h2>{question.questionText}</h2>
                <img src={`../${IMAGES_URL}/${ICONS_IMAGES_URL}/${question.thumbnail}`} />
              </div>
            </TinderCard>
          ))}
        </div>
      ) : (
        <div id="no-cards-left">
          <h2>There's no cards left!</h2>
          <img src={ghost} alt="no cards left" />
        </div>
      )}

      {questions.length ? (
        <div
          id="swipe-buttons-container"
          style={{
            left: computeLeft(0.85),
            width: computeWidth(85),
            top: placeElementAtBottomOfSection(25),
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
      ) : (
        <div id="no-swipe-buttons-container">
          <button className="basic-button" onClick={() => history.goBack()}>
            Go back
          </button>
          <button id="suggest-a-question" className="basic-button" onClick={handleClick}>
            Suggest
            <br /> a&nbsp;new question
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  questions: state.question.questions,
  initialLoading: state.question.initialLoading,
});

export default connect(mapStateToProps, {
  getTooLateToAsks,
  setInitialLoading,
  removeATooLateToAsk,
})(Swipe);
