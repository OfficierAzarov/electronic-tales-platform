import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './ModernWorld.css';
import CardHub from '../../../elements/cards-hub/CardsHub';
import Hands from './../../../../resources/img/icons/swipe-hands.png';

import { getCategories } from '../../../../redux/actions/category';

const ModernWorld = ({ categories, getCategories }) => {
  useEffect(() => {
    getCategories();
  }, []);

  return (
<<<<<<< HEAD
    <div id="modern-world">
      <h1>Modern World</h1>
      <div>
        <p className="title">Too late to ask</p>
        <Link to="/modern-world/swipe">Let's go for a swipe!</Link>
||||||| ed960cf
    <div id="modern-world">
      <h1>Modern World</h1>
      <div className="image-card">
        <p className="title">Too late to ask</p>
        <img />A cool animation/image of swipping
        <Link to="/modern-world/swipe">Let's go for a swipe!</Link>
=======
    <div id="modern-world" className="world-page container">
      <div className="world-title-wrapper">
        <h2 className="world-title">Modern World</h2>
      </div>      
      <div className="image-card">
        <div className="title-wrapper">
          <h3 className="title">Too late to ask</h3>
        </div>
        <div className="card-content">
          <img src={Hands} alt="Some hands swiping" loading="lazy" className="card-img"/>
          <Link to="/modern-world/swipe" className="card-cta">Let's go for a swipe! 🔥</Link>
        </div>
>>>>>>> f8264c8ab7ddb1756d4ae5cd016bf153bc286c72
      </div>
      {categories.map((category) => (
        <CardHub category={category} key={category.id} />
      ))}
    </div>
  );
};

ModernWorld.propTypes = {
  categories: PropTypes.array.isRequired,
  getCategories: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.category.categories,
});

export default connect(mapStateToProps, { getCategories })(ModernWorld);
