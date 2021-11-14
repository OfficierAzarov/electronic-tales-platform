import React from 'react';
import { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import CardsHub from '../../cards-hub/CardsHub';

const AllArticlesOfTheWorld = ({ articles, preferredLanguage }) => {
  const deduceCategoriesFromArticles = (articles) => {
    if (articles.length !== 0) {
      let categoryInPreferredLanguage = {
        firstKey: 'category',
        secondKey: preferredLanguage,
      };
      let articlesGroupedByCategories = groupBy(articles, categoryInPreferredLanguage);
      console.log(articlesGroupedByCategories);
      const componentsToReturn = [];
      for (let i = 0; i < Object.keys(articlesGroupedByCategories).length; i++) {
        const categoryName = Object.keys(articlesGroupedByCategories)[i];
        const categoryArticles =
          articlesGroupedByCategories[Object.keys(articlesGroupedByCategories)[i]];
        componentsToReturn.push(
          <CardsHub
            key={i}
            categoryName={categoryName}
            categoryArticles={categoryArticles}
            preferredLanguage={preferredLanguage}
          />
        );
      }
      return componentsToReturn;
    }
  };

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#grouping_objects_by_a_property
  const groupBy = (articles, propertyToGroupByPath) => {
    return articles.reduce(function (acc, obj) {
      console.log(propertyToGroupByPath);
      let key = obj[propertyToGroupByPath.firstKey][propertyToGroupByPath.secondKey];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  };

  return <Fragment>{deduceCategoriesFromArticles(articles)}</Fragment>;
};

AllArticlesOfTheWorld.propTypes = {
  articles: PropTypes.array.isRequired,
  preferredLanguage: PropTypes.string.isRequired,
};

export default AllArticlesOfTheWorld;
