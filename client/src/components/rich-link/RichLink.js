import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { openModal, setModalContent } from '../../actions/modal';

import './RichLink.css'


const RichLink = ({ richLinks, contentId, setModalContent, openModal }) => {

    const process = (contentId) => {
        const richLink = richLinks.find(link => link.reference === contentId);
        return richLink.needsASpaceAfter ? richLink.name + ' ' : richLink.name;
    }

    const generateModal = (contentId) => {
        const richLink = richLinks.find(link => link.reference === contentId);
        const content = richLink.content;
        setModalContent(content);
        openModal();
    }

    return (
        <Fragment>
            <div className="rich-link" onClick={() => generateModal(contentId)}>
                { process(contentId) }
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    richLinks: state.article.currentArticle.richLinks
});

// export default (RichLink);
export default connect(mapStateToProps, { setModalContent, openModal })(RichLink);