import React from 'react';
import { connect } from 'react-redux';

import './RichLink.css'

const RichLink = ({ richLinks, contentId }) => {

    const process = (contentId) => {
        console.log(contentId);
        const richLink = richLinks.find(link => link.reference === contentId);
        console.log(richLink);
        return richLink.reference + ' ';
    }

    return (
        <div className="rich-link">
            { process(contentId) }
        </div>
    );
};

const mapStateToProps = (state) => ({
    richLinks: state.article.currentArticle.richLinks
});

// export default (RichLink);
export default connect(mapStateToProps)(RichLink);