import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Navbar.css';
import { ANCIENT_WORLD, MODERN_WORLD, IMAGINARIUM, DISCORD } from './paths';
import ruins from '../../../resources/img/icons/ruins.png';

const Navbar = ({ currentPath }) => {
  const isActive = (element) => {
    if (currentPath !== null) {
      return currentPath === element ? 'active' : '';
    }
  };

  return (
    <div id="navbar">
      <img src={ruins} alt="ancient world icon" />

      <img src={ruins} alt="modern world icon" />

      <img src={ruins} alt="imaginarium" />

      <img src={ruins} alt="discord icon" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentPath: state.path.currentPath.pathname,
});

export default connect(mapStateToProps)(Navbar);
