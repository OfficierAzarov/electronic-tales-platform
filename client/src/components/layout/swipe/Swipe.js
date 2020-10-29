import React, { useEffect } from 'react';
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
            {
                questions.map(question => 
                    <SwipeCard question={question}/>
                )
            }
            <div id="buttons">
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