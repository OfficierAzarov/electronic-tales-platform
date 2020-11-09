import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getQuestions } from '../../../actions/question';

import './Swipe.css';
import SwipeCard from '../../swipe-card/SwipeCard';

const Swipe = ({questions, getQuestions}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [leftPosition, setLeftPosition] = useState(0);
    const [topPosition, setTopPosition] = useState(0);
    const [divWidth, setDivWidth] = useState(0);

    useEffect(() => {
        getQuestions();
        positionOnCenter(0.7);
    }, []);

    const positionOnCenter = (wantedDivProportion) => {
        setDivWidth(windowWidth*wantedDivProportion);
        setLeftPosition(windowWidth/2-(windowWidth*wantedDivProportion/2));
    }

    return (
        <div id="swipe">
            <div id="swipe-cards-container" style={{ left: leftPosition, width: divWidth }}>
            {
                questions.map(question => 
                    <SwipeCard question={question} key={question.id}/>
                )
            }
            </div>
            <div id="swipe-buttons-container" style={{ left: leftPosition, width: divWidth }}>
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