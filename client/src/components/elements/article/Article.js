import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import './Article.css';

import Error from '../error/Error';
import ArticleContent from './article-content/ArticleContent';
import Modal from '../modal/Modal';
import { setCurrentArticle } from '../../../redux/actions/article';
import ReadingTime from '../reading-time/ReadingTime';
import ArticleInterim from './ArticleInterim';

const Article = ({}) => {
  // const Article = ({ match, setCurrentArticle, article }) => {

  const [article, setArticle] = useState({ content: '' });

  // useEffect(() => {
  //   setCurrentArticle(match.params.type, match.params.slug);
  // }, []);

  // useEffect(() => {
  //   setArticle({ content: '123654' });
  // }, []);

  // const change = () => {
  //   setArticle({ content: '123654' });
  // };

  useEffect(() => {
    setArticle({ content: '123654' });
  }, []);

  // change();

  // useEffect(() => {
  //   setArticle({
  //     id: '1',
  //     title: 'What is a port ?',
  //     slug: 'what-is-a-port',
  //     content:
  //       '<p>A computer is a machine that can be instructed to carry out sequences of arithmetic or logical operations automatically via computer programming. Modern computers have the ability to follow generalized sets of operations, called programs. These programs enable |richlink_1| computers to perform an extremely wide range of tasks. A "complete" computer including the hardware, |richlink_2| the operating system (main software), and peripheral equipment required and used for "full" operation can be referred to as a computer system. This term may as well be used for a group of computers that are connected and work together, in particular a computer network or computer cluster |richlink_3|.</p><br><br><p>More features are :</p><ul><li>Computing</li><li>Monitoring</li><li>Processing 🚀</li></ul>',
  //     richLinks: [
  //       {
  //         reference: 'richlink_1',
  //         name: 'ce 1er article',
  //         content: 'Je suis <b>un soir</b>',
  //         needsASpaceAfter: true,
  //       },
  //       {
  //         reference: 'richlink_2',
  //         name: 'ce 2e article',
  //         content:
  //           "Le plat pays <img src='https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png'/>",
  //       },
  //       {
  //         reference: 'richlink_3',
  //         name: 'ce 3e article',
  //         content:
  //           'Akh troika! In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light. <br><br><iframe width="100" height="100" src="https://www.youtube.com/embed/VGK7iZ12tFc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  //       },
  //     ],
  //     thumbnail: 'gameboy.png',
  //     category: 'Too late to ask',
  //   });
  // }, []);

  // const [article, setArticle] = useState({});

  const history = useHistory();

  // const article = { content: '12354' };

  // if (article === undefined || !article.length > 0) {
  //   console.log('aouch, article is null');
  //   return null;
  // }

  // console.log('lets render');

  const renderArticleContent = () => {
    if (article.length > 0) return <ArticleContent articleContent={article.content} />;
  };

  // if (article.length > 0) {
  console.log(article);
  return (
    // <ArticleInterim article={article} />
    <div id="article-container">
      <ArticleContent articleContent={article.content} />
      {/* <button onClick={() => change()}></button> */}
      {/* {article.length > 0 ? <ArticleContent articleContent={article.content} /> : null} */}
      {/* {renderArticleContent()} */}
    </div>
  );

  // return (
  //   <div id="article-container">
  //     {article && article !== undefined ? (
  //       <Fragment>
  //         {/* <ReadingTime articleContent={article.content} /> */}
  //         <h1>{article.title}</h1>
  //         <ArticleContent />
  //         <Modal />
  //       </Fragment>
  //     ) : (
  //       <Error title="Aouch!" message="Looks like there's no article about this topic yet." />
  //     )}
  //     <button className="basic-button" onClick={() => history.goBack()}>
  //       Go back
  //     </button>
  //   </div>
  // );
  // return null;
};

// Article.propTypes = {
//   article: PropTypes.object.isRequired,
// setCurrentArticle: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   article: state.article.currentArticle,
// });

export default Article;
// export default connect(mapStateToProps, { setCurrentArticle })(Article);
