import React from 'react';
import { Fragment } from 'react';
import { deduceCategoriesFromArticles } from '../../../../utils/data-sorting/sorts';

const AllArticlesOfTheWorld = ({ articles }) => {
  return <Fragment>{deduceCategoriesFromArticles(articles)}</Fragment>;
};

export default AllArticlesOfTheWorld;
