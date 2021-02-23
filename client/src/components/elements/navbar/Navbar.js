import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Navbar.css';

import HomeNavbar from './home-navbar/HomeNavbar';
import DefaultNavbar from './default-navbar/DefaultNavbar';

const Navbar = ({ isCurrentPageHome }) => {
  return <nav id="main-nav">{isCurrentPageHome ? <HomeNavbar /> : <DefaultNavbar />}</nav>;
};

const mapStateToProps = (state) => ({
  isCurrentPageHome: state.page.isCurrentPageHome,
});

Navbar.propTypes = {
  isCurrentPageHome: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Navbar);
