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
    <div id="modern-world" className="world-page container">
      <div className="line-title-wrapper world-title-wrapper">
        <h2 className="world-title">Modern World</h2>
      </div>      
      <div className="image-card">
        <div className="line-title-wrapper category-title-wrapper">
          <h3 className="title">Too late to ask</h3>
        </div>
        <div className="w-cat-card-content">
          {/* <div className="hot-label">Hot</div> */}
          <img src={Hands} alt="Some hands swiping" loading="lazy" className="w-cat-card-img"/>
          <Link to="/modern-world/swipe" className="w-cat-card-cta">Let's go for a swipe 🔥</Link >
        </div>
      </div>
      {categories.map((category, index) => (
        <CardHub category={category} key={category.id} id={`category-${index}`}/>
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
