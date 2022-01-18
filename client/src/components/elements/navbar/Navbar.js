import React, { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Navbar.css';

import HomeNavbar from './home-navbar/HomeNavbar';
import DefaultNavbar from './default-navbar/DefaultNavbar';

const Navbar = ({ isCurrentPageHome }) => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 768px)',
  });

  if (isCurrentPageHome) {
    return (
      <Fragment>
        {isDesktop ? null : (
          <nav id="main-nav">
            <HomeNavbar />
          </nav>
        )}
      </Fragment>
    );
  }

  return (
    <nav id="main-nav">
      <DefaultNavbar />
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isCurrentPageHome: state.page.isCurrentPageHome,
});

Navbar.propTypes = {
  isCurrentPageHome: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Navbar);
