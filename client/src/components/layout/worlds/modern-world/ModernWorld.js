import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './ModernWorld.css';
import CardHub from '../../../cards-hub/CardsHub';

import { getCategories } from '../../../../redux/actions/category';

const ModernWorld = ({ categories, getCategories }) => {
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div id="modern-world">
      <h1>Modern World</h1>
      <div>
        {categories.map((category) => (
          <CardHub category={category} key={category.id} />
        ))}
      </div>
      {/* TO DO : change routing */}
      <Link to="/swipe">Too late to ask</Link>
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
