import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPath } from '../../../actions/path';

import './Navbar.css';
import { ANCIENT_WORLD, MODERN_WORLD, IMAGINARIUM, DISCORD } from './paths';
import ruins from '../../../resources/img/icons/ruins.png';

const Navbar = ({ setCurrentPath, currentPath }) => {
  return (
    <div id="navbar">
      <img
        src={ruins}
        alt="ancient world icon"
        onClick={() => {
          setCurrentPath(ANCIENT_WORLD);
        }}
      />

      <img
        src={ruins}
        alt="modern world icon"
        onClick={() => {
          setCurrentPath(MODERN_WORLD);
        }}
      />

      <img
        src={ruins}
        alt="imaginarium"
        onClick={() => {
          setCurrentPath(IMAGINARIUM);
        }}
      />

      <img src={ruins} alt="my space" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentPath: state.path.currentPath.pathname,
});

export default connect(mapStateToProps, { setCurrentPath })(Navbar);
