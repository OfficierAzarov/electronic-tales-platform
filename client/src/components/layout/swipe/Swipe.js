import React, { Fragment } from 'react';

import './Swipe.css';

const Swipe = () => {
    return (
        <div id="swipe">
            <h2>
                What is a port?
            </h2>
            <div id="buttons">
                <div className="action-button">❌</div>
                <div className="action-button">❤️</div>
            </div>
        </div>
    );
};

export default Swipe;