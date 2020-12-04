import React from 'react';
import { convertToCleanHtml } from '../../../utils/data-processing/utils';

import './HtmlContent.css';

const HtmlContent = ({ content }) => {
    return (
        <div className="html-content" dangerouslySetInnerHTML={{__html: convertToCleanHtml(content)}}>
        </div>
    );
};

export default HtmlContent;