import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Navbar.css';
import ruins from '../../../resources/img/icons/ruins.png';

const Navbar = ({ currentPath }) => {
  const isActive = (element) => {
    if (currentPath !== null) {
      return currentPath === element ? 'active' : '';
    }
  };

  return (
    <div id="navbar">
      <Link
        to="/ancient-world"
        className={`worlds ${isActive('/ancient-world')}`}
      >
        <img src={ruins} alt="ancient world icon" />
      </Link>
      <Link
        to="/modern-world"
        className={`worlds ${isActive('/modern-world')}`}
      >
        <img src={ruins} alt="ancient world icon" name="modern-world" />
      </Link>
      <Link to="/imaginarium" className={`worlds ${isActive('/imaginarium')}`}>
        <img src={ruins} alt="ancient world icon" name="imaginarium" />
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentPath: state.path.currentPath.pathname,
});

export default connect(mapStateToProps)(Navbar);
