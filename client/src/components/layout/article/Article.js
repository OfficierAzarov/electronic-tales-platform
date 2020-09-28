import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Article.css';

const Article = ({ article }) => {
  useEffect(() => {
    console.log(article);
  }, []);

  return <div>This is an article {article.title}</div>;
};

const mapStateToProps = (state) => ({
  article: state.article.currentArticle,
});

export default connect(mapStateToProps)(Article);
