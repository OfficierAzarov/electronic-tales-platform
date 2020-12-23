import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './ModernWorld.css';
import CardHub from '../../../elements/cards-hub/CardsHub';

import { getCategories } from '../../../../redux/actions/category';

const ModernWorld = ({ categories, getCategories }) => {
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div id="modern-world">
      <div className="world-title-wrapper">
        <h2 className="world-title">Modern World</h2>
      </div>      
      <div className="image-card">
        <p className="title">Too late to ask</p>
        <img />A cool animation/image of swipping
        <Link to="/modern-world/swipe">Let's go for a swipe!</Link>
      </div>
      Cool reading animation/image
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
