import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TinderCard from 'react-tinder-card';

import {
  getQuestions,
  removeAQuestion,
  setInitialLoading,
} from '../../../redux/actions/question';

import './Swipe.css';
import ghost from '../../../resources/img/icons/ghost.png';
import { IMAGES_URL, ICONS_IMAGES_URL } from '../../../utils/urls/urls';
import {
  computeLeft,
  computeWidth,
} from '../../../utils/display/centerSomething';

export const Swipe = ({
  getQuestions,
  initialLoading,
  questions,
  removeAQuestion,
  setInitialLoading,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (initialLoading) {
      getQuestions();
      setInitialLoading(false);
    }
  }, []);

  const cardRefs = Array(questions.length)
    .fill(0)
    .map((emptyElement) => React.createRef());

  const swipeActionFromButton = (direction) => {
    if (questions.length) {
      const questiontoRemove = questions[questions.length - 1];
      const index = questions.indexOf(questiontoRemove);
      cardRefs[index].current.swipe(direction);
    }
  };

  const onCardLeftScreen = (direction, questionToRemove) => {
    removeAQuestion(questionToRemove);
    if (direction === 'right')
      history.push(
        `/modern-world/articles/swipe-answer/${questionToRemove.answer.slug}`
      );
  };

  return (
    <div id="swipe">
      {questions.length ? (
        <div
          id="swipe-cards-container"
          style={{ left: computeLeft(0.7), width: computeWidth(0.7) }}
        >
          {questions.map((question, index) => (
            <TinderCard
              onCardLeftScreen={(dir) => onCardLeftScreen(dir, question)}
              className="swipe-card"
              key={question.id}
              ref={cardRefs[index]}
            >
              <div className="swipe-card-content">
                <h2>{question.questionText}</h2>
                <img
                  src={`../${IMAGES_URL}/${ICONS_IMAGES_URL}/${question.thumbnail}`}
                />
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
          style={{ left: computeLeft(0.7), width: computeWidth(0.7) }}
        >
          <button
            id="swipe-left-action"
            className="action-button swipe-button"
            onClick={() => swipeActionFromButton('left')}
          >
            ❌
          </button>
          <button
            id="swipe-right-action"
            className="action-button swipe-button"
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
          <button id="suggest-a-question" className="basic-button">
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
  getQuestions,
  setInitialLoading,
  removeAQuestion,
})(Swipe);
