import React, { Component, useEffect, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from '../layout/home/Home';
import Navbar from '../layout/navbar/Navbar';
import AncientWorld from '../layout/worlds/ancient-world/AncientWorld';
import ModernWorld from '../layout/worlds/modern-world/ModernWorld';
import Imaginarium from '../layout/worlds/imaginarium/Imaginarium';

import './MainDisplay.css';

const MainDisplay = ({ shownComponent }) => {
  const scrollToRef = (ref) =>
    window.scrollTo(0, ref.current.offsetTop, { behavior: 'smooth' });

  useEffect(() => {
    console.log(shownComponent);
    locateScroll(shownComponent);
  }, [shownComponent]);

  const home = useRef();
  const ancientWorld = useRef();
  const modernWorld = useRef();
  const imaginarium = useRef();

  const locateScroll = (element) => {
    switch (element) {
      case 'ancientWorld':
        scrollToRef(ancientWorld);
        break;
      case 'modernWorld':
        scrollToRef(modernWorld);
        break;
      case 'imaginarium':
        scrollToRef(imaginarium);
        break;
      default:
        scrollToRef(home);
    }
  };

  return (
    <Fragment>
      <div className="container" ref={home}>
        <Home />
      </div>
      <div ref={modernWorld} className="container">
        <ModernWorld />
      </div>
      <div ref={imaginarium} className="container">
        <Imaginarium />
      </div>
      <div ref={ancientWorld} className="container">
        <AncientWorld />
      </div>
      <Navbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  shownComponent: state.path.currentPath,
});

export default connect(mapStateToProps)(MainDisplay);
