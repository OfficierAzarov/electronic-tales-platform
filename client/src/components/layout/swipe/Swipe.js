import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { getQuestions } from '../../../actions/question';

import './Swipe.css';
import SwipeCard from '../../swipe-card/SwipeCard';

const Swipe = ({questions, getQuestions}) => {

    useEffect(() => {
        getQuestions();
    }, []);

    return (
        <div id="swipe">
            <div className="swipe-cards-container">
            {
                questions.map(question => 
                    <SwipeCard question={question} key={question.id}/>
                )
            }
            </div>
            <div id="swipe-buttons-container">
                <div className="action-button">❌</div>
                <div className="action-button">❤️</div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    questions: state.question.questions,
  });

export default connect(mapStateToProps, { getQuestions })(Swipe);