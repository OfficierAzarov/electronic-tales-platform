import React from 'react';
import PropTypes from 'prop-types';

import './LangagueNavbar.css';

const LangagueNavbar = () => {
  return (
    <div id="language-navbar-container">
      <button onClick={() => console.log('contentId')}>test</button>
    </div>
  );
};

LangagueNavbar.propTypes = {};

export default LangagueNavbar;
