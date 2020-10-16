import React from 'react';
import { connect } from 'react-redux';

import './RichLink.css'

const RichLink = ({ contentId }) => {


    const retrieveSubstring = (contentId) => {
        console.log(contentId);
        return contentId + ' ';
        // const substring = content.substring(content.lastIndexOf('[') + 1, content.lastIndexOf(']'));
        // return substring;
    }

    return (
        <div className="rich-link">
            { retrieveSubstring(contentId) }
        </div>
    );
};

// const mapStateToProps = (state) => ({
//     name = state.article.currentArticle.richLinks.name,
//     content = state.article.currentArticle.richLinks.content
// });

export default (RichLink);
// export default connect(mapStateToProps)(RichLink);