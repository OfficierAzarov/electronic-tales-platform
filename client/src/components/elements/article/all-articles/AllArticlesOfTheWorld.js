import React from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import CardsHub from '../../cards-hub/CardsHub';

const AllArticlesOfTheWorld = ({ articles, preferredLanguage }) => {
  const deduceCategoriesFromArticles = (articles) => {
    if (articles.length !== 0) {
      /**
       * In the article json, category is an objet with as many properties as there are languages on Electronic Tales Platform. So to access the actual word we want to use as the name of the category, we have to follow a path.
       * Example :
       * article : {
       *    ...other properties
       *  category : {
       *    "fr": "Détox",
       *    "en": "Detox"
       *  }
       * }
       * The path will be article.category.fr or article.category.en
       * => this is the same as article[category][fr] and article[category][en]
       * And here : article[category][preferredLanguage]
       * So we create an object containing all the keys needed to follow the path until we get to the value that we will use as the name of the category (ex: "Détox") :
       */
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
          <CardsHub key={i} categoryName={categoryName} categoryArticles={categoryArticles} />
        );
      }
      return componentsToReturn;
    }
  };

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#grouping_objects_by_a_property
  const groupBy = (articles, pathOfGroupingProperty) => {
    return articles.reduce(function (acc, obj) {
      console.log(pathOfGroupingProperty);
      let key = obj[pathOfGroupingProperty.firstKey][pathOfGroupingProperty.secondKey];
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

const mapStateToProps = (state) => ({
  preferredLanguage: state.language.preferredLanguage,
});

export default connect(mapStateToProps)(AllArticlesOfTheWorld);
