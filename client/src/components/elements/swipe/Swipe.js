import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TinderCard from 'react-tinder-card';
import { PropTypes } from 'prop-types';
import Fade from 'react-reveal/Fade';
import Emoji from 'a11y-react-emoji';

import {
  getTooLateToAsks,
  removeATooLateToAsk,
  setHasAlreadyBeenLoaded,
} from '../../../redux/actions/tooLateToAsk';

import './Swipe.css';
import ghost from '../../../resources/img/icons/ghost.png';

import {
  computeLeft,
  computeWidth,
  computeHeight,
  placeElementAtBottomOfSection,
} from '../../../utils/display/positioning';
import GoBackButton from '../buttons/go-back/GoBackButton';
import HtmlContent from '../html-content/HtmlContent';
import { WORLDS } from '../../../dictionnary/worlds';

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
    setTimeout(() => history.push(`/${match.params.world}/too-late-to-ask/add-question`), 400);
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
    removeATooLateToAsk(questionToRemove, match.params.world);
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
              preventSwipe={['up', 'down']}
              className="swipe-card"
              ref={cardRefs[index]}
            >
              <div
                className="swipe-card-content"
                style={{
                  height: computeHeight(65),
                  backgroundImage: `url(${question.thumbnail})`,
                }}
              >
                <p className="swipe-card-content-text">
                  <span className="swipe-card-content-text-title">
                    <HtmlContent content={question.text} />
                  </span>
                  <HtmlContent content={question.subtext} />
                </p>
              </div>
            </TinderCard>
          ))}
          <div
            id="swipe-buttons-container"
            style={{
              width: computeWidth(85),
              top: placeElementAtBottomOfSection(90, 10, 10),
            }}
          >
            <button
              id="swipe-left-action"
              className="basic-button action-button"
              disabled={disable}
              onClick={() => swipeActionFromButton('left')}
            >
              Je sais déjà
            </button>
            <button
              id="swipe-right-action"
              className="basic-button action-button"
              disabled={disable}
              onClick={() => swipeActionFromButton('right')}
            >
              Je veux savoir
            </button>
          </div>
        </div>
      ) : (
        <Fade duration={1500}>
          <div id="no-cards-left">
            <GoBackButton />
            <img src={ghost} loading="auto" alt="no cards left" />
            <h3 className="neon flicker">
              Il n'y plus de questions à matcher dans ta région pour le moment.
            </h3>
            <p>
              <Emoji symbol="✨" label="paillettes de fausse offre premium" />
              Souscris à l'offre premium pour désactiver ta géolocalisation et matcher avec des
              questions du monde entier
              <Emoji symbol="✨" label="paillettes de fausse offre premium" />
              <br />
              <br />
              Non, on plaisante.
              <br />{' '}
              <span className="small-text">
                Enfin, cela dit, tu devrais peut-être désactiver ta géolocalisation si tu veux
                économiser de la batterie. Et en même temps, tu fais bien ce que tu veux avec ton
                téléphone. Et puis, c'est pratique, le GPS, quand même. Je me souviens de cette fois
                où je devais aller rendre visiter à ma tante Léonie dans le Perche, et... Bref.
              </span>
            </p>
          </div>
          <div id="no-swipe-buttons-container">
            <a id="suggest-a-question" className="basic-button" onClick={handleClick}>
              J'aide la communauté, je propose une nouvelle question&nbsp;!
            </a>
          </div>
        </Fade>
      )}
    </div>
  );
};

Swipe.propTypes = {
  match: PropTypes.object.isRequired,
  getTooLateToAsks: PropTypes.func.isRequired,
  hasAlreadyBeenLoaded: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
  removeATooLateToAsk: PropTypes.func.isRequired,
  setHasAlreadyBeenLoaded: PropTypes.func.isRequired,
};

const getWorld = () => {
  const worldWithSlash = window.location.pathname.replace('/too-late-to-ask', '');
  const world = worldWithSlash.replace('/', '');
  return world;
};

const mapStateToProps = (state) => {
  if (getWorld() === WORLDS.MODERN_WORLD)
    return {
      questions: state.question.questionsModernWorld,
      hasAlreadyBeenLoaded: state.question.hasAlreadyBeenLoaded,
    };
  if (getWorld() === WORLDS.IMAGINARIUM)
    return {
      questions: state.question.questionsImaginarium,
      hasAlreadyBeenLoaded: state.question.hasAlreadyBeenLoaded,
    };
};

export default connect(mapStateToProps, {
  getTooLateToAsks,
  setHasAlreadyBeenLoaded,
  removeATooLateToAsk,
})(Swipe);
