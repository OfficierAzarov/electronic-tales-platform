import React, { useEffect, useState, useRef } from 'react';
import store from '../../../store';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import TinderCard from 'react-tinder-card';

import { getQuestions } from '../../../actions/question';
import { removeAQuestion } from '../../../actions/question';
import { setInitialLoading } from '../../../actions/question';

import './Swipe.css';
import { IMAGES_URL, ICONS_IMAGES_URL } from '../../../utils/urls/urls';
import { computeLeft, computeWidth } from '../../../utils/display/centerSomething';

const Swipe = ({getQuestions, initialLoading, questions, removeAQuestion, setInitialLoading }) => {


    useEffect(() => {
        if (initialLoading) {
            getQuestions();
            setInitialLoading(false);
        }
    }, []);

    const history = useHistory();

    const cardRefs = Array(questions.length).fill(0).map(emptyElement => React.createRef());


    const onSwipe = (questionToRemove) => {
        removeAQuestion(questionToRemove);
    }

    const swipeActionFromButton = (direction) => {
        console.log(cardRefs);
        console.log(questions);
        if (questions.length) {
            const questiontoRemove = questions[questions.length-1];
            const index = questions.indexOf(questiontoRemove);
            console.log(index);
            console.log(cardRefs[index]);
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
                    onSwipe={() => onSwipe(question)}
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
                <div className="action-button" onClick={() => swipeActionFromButton('left')}>❌</div>
                <div className="action-button" onClick={() => swipeActionFromButton('right')}>❤️</div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    questions: state.question.questions,
    initialLoading: state.question.initialLoading
  });

export default connect(mapStateToProps, { getQuestions, setInitialLoading, removeAQuestion })(Swipe);


    // const [leftQuestions, setLeftQuestions] = useState([]);

    // const computeLeftQuestions = () => {
    //     const currentState = store.getState();
    //     const allQuestions = currentState.question.questions;
    //     const removedQuestions = currentState.question.removedQuestions;

    //     let leftQuestionsList = [];

    //     if (allQuestions.length && removedQuestions.length) {
    //         for (let i=0; i < allQuestions.length; i++) {
    //             for (let j=0; j < removedQuestions.length; j++)
    //                 if (allQuestions[i].id !== removedQuestions[j].id) {
    //                     leftQuestionsList.push(allQuestions[i]);
    //                 }
    //         }
    //         setLeftQuestions(leftQuestionsList);
    //     } else {
    //         setLeftQuestions(allQuestions);
    //     }
    // }
    
    // const alreadyRemoved = [];