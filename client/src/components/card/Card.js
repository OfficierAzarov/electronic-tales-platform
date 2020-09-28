import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Card.css';
import { setCurrentArticle } from '../../actions/article';

const Card = ({ article, setCurrentArticle }) => {
  const handleClick = () => {
    setCurrentArticle(article.id);
  };

  return (
    <Link to="">
      <div class="card" onClick={handleClick}>
        <img src={`./img/icons/${article.thumbnail}`} />
        <div id="title">{article.title}</div>
      </div>
    </Link>
  );
};

export default connect(null, { setCurrentArticle })(Card);
