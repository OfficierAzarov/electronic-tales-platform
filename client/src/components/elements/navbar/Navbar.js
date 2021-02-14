import React from 'react';

import { connect } from 'react-redux';

import './Navbar.css';

import HomeNavbar from './home-navbar/HomeNavbar';
import DefaultNavbar from './default-navbar/DefaultNavbar';

const Navbar = ({ isCurrentPageHome }) => {
  return <nav>{isCurrentPageHome ? <HomeNavbar /> : <DefaultNavbar />}</nav>;
};

const mapStateToProps = (state) => ({
  isCurrentPageHome: state.page.isCurrentPageHome,
});

export default connect(mapStateToProps)(Navbar);
