import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getQuestions } from '../../../actions/question';

import './Swipe.css';
import SwipeCard from '../../swipe-card/SwipeCard';

const Swipe = ({questions, getQuestions}) => {

    useEffect(() => {
        getQuestions();
    }, []);

    const onSwipe = (direction) => {
        console.log('You swiped this: ' + direction)
    }
       
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div id="swipe">
            {
                questions.map(question => 

                        <SwipeCard/>
                    </TinderCard>)
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