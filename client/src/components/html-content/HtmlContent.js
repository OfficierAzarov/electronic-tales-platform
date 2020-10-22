import React from 'react';
import { convertToCleanHtml } from '../../utils/Utils';

import './HtmlContent.css';

const HtmlContent = ({ content }) => {
    return (
        <div className="html-content" dangerouslySetInnerHTML={{__html: convertToCleanHtml(content)}}>
        </div>
    );
};

export default HtmlContent;