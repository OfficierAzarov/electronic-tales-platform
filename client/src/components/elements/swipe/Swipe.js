import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TinderCard from 'react-tinder-card';

import { getQuestions, removeAQuestion, setInitialLoading } from '../../../redux/actions/question';

import './Swipe.css';
import ghost from '../../../resources/img/icons/ghost.png';
import { IMAGES_URL, ICONS_IMAGES_URL } from '../../../utils/urls/urls';
import { computeLeft, computeWidth } from '../../../utils/display/centerSomething';

export const Swipe = ({
  getQuestions,
  initialLoading,
  questions,
  removeAQuestion,
  setInitialLoading,
}) => {
  const [disable, setDisable] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (initialLoading) {
      getQuestions();
      setInitialLoading(false);
    }
  }, []);

  const handleClick = () => {
    setTimeout(() => history.push('/modern-world/swipe/add-question'), 400);
  };

  const cardRefs = Array(questions.length)
    .fill(0)
    .map((emptyElement) => React.createRef());

  const swipeActionFromButton = (direction, e) => {
    if (questions.length) {
      const questiontoRemove = questions[questions.length - 1];
      const index = questions.indexOf(questiontoRemove);
      console.log(index);

      if (cardRefs[index].current) cardRefs[index].current.swipe(direction);
    }
    setDisable(true);
  };

  const onCardLeftScreen = (direction, questionToRemove) => {
    removeAQuestion(questionToRemove);
    setDisable(false);
    // button.disabled = false;
    if (direction === 'right')
      history.push(`/modern-world/articles/swipe-answers/${questionToRemove.answer.slug}`);
  };

  const onSwipe = () => {};

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
              onSwipe={(dir) => onSwipe()}
              className="swipe-card"
              key={question.id}
              ref={cardRefs[index]}
            >
              <div className="swipe-card-content">
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
          style={{ left: computeLeft(0.7), width: computeWidth(0.7) }}
        >
          <button
            id="swipe-left-action"
            className="action-button swipe-button"
            disabled={disable}
            onClick={(e) => swipeActionFromButton('left', e)}
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
  getQuestions,
  setInitialLoading,
  removeAQuestion,
})(Swipe);
