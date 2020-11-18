import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import TinderCard from 'react-tinder-card';

import { getQuestions } from '../../../actions/question';

import './Swipe.css';
import { IMAGES_URL, ICONS_IMAGES_URL } from '../../../utils/urls/urls';
import { computeLeft, computeWidth } from '../../../utils/display/centerSomething';

const Swipe = ({questions, getQuestions}) => {

    useEffect(() => {
        getQuestions();
    }, []);

    const history = useHistory();
    
    const alreadyRemoved = [];
    const cardRefs = Array(questions.length).fill(0).map(emptyElement => React.createRef());

    const onSwipe = (questionToRemove) => {
        alreadyRemoved.push(questionToRemove);
    }

    const swipeAction = (direction) => {
        // https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js
        const questionsLeft = questions.filter(question => !alreadyRemoved.includes(question));
        if (questionsLeft.length) {
            const toRemove = questionsLeft[questionsLeft.length-1];
            const index = questions.indexOf(toRemove);
            alreadyRemoved.push(toRemove);
            cardRefs[index].current.swipe(direction);
        }
    }

    const onCardLeftScreen = (direction) => {
        console.log(direction);
        if (direction === 'right') history.push("/");
    }


    return (
        <div id="swipe">
            <div id="swipe-cards-container" style={{ left: computeLeft(0.7), width: computeWidth(0.7)}}>
            {
                questions.map((question, index) => 
                    <TinderCard
                    onSwipe={() => onSwipe(question.id)}
                    onCardLeftScreen={(dir) => onCardLeftScreen(dir)}
                    className="swipe-card"
                    key={question.id}
                    ref={cardRefs[index]}>
                        <div className="swipe-card-content">
                            <h2>{question.questionText}</h2>
                            <img src={`${IMAGES_URL}/${ICONS_IMAGES_URL}/${question.thumbnail}`}/>
                        </div>
                    </TinderCard>
                )
            }
            </div>
            <div id="swipe-buttons-container" style={{ left: computeLeft(0.7), width: computeWidth(0.7)}}>
                <div className="action-button" onClick={() => swipeAction('left')}>❌</div>
                <div className="action-button" onClick={() => swipeAction('right')}>❤️</div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    questions: state.question.questions,
  });

export default connect(mapStateToProps, { getQuestions })(Swipe);