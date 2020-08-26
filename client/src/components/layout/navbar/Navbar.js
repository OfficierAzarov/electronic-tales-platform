import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Navbar.css';
import { ANCIENT_WORLD, MODERN_WORLD, IMAGINARIUM } from './paths';
import ruins from '../../../resources/img/icons/ruins.png';

const Navbar = ({ currentPath }) => {
  const isActive = (element) => {
    if (currentPath !== null) {
      return currentPath === element ? 'active' : '';
    }
  };

  return (
    <div id="navbar">
      <Link to={ANCIENT_WORLD} className={`worlds ${isActive(ANCIENT_WORLD)}`}>
        <img src={ruins} alt="ancient world icon" />
      </Link>
      <Link to={MODERN_WORLD} className={`worlds ${isActive(MODERN_WORLD)}`}>
        <img src={ruins} alt="ancient world icon" name="modern-world" />
      </Link>
      <Link to={IMAGINARIUM} className={`worlds ${isActive(IMAGINARIUM)}`}>
        <img src={ruins} alt="ancient world icon" name="imaginarium" />
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentPath: state.path.currentPath.pathname,
});

export default connect(mapStateToProps)(Navbar);
