import React, { Fragment } from 'react';
import TinderCard from 'react-tinder-card';

import './Swipe.css';

const Swipe = () => {


    const questions = [
        {text: 'blabla'},
        {text: 'blibli'},
        {text: 'bloblo'}
    ]

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }
       
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

            // <div>

            // </div>
    return (
        <div id="swipe">
            {
                questions.map(question => <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')}>{question.text}</TinderCard>)
             }
            {/* <h2>
                What is a port?
            </h2> */}
            <div id="buttons">
                <div className="action-button">❌</div>
                <div className="action-button">❤️</div>
            </div>
            </div>
    );
};

export default Swipe;