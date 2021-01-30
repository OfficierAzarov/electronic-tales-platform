import React, { useEffect } from 'react';
import { sanitizeWithExceptionsForVideos } from '../../../utils/data-processing/sanitize';

import './HtmlContent.css';

const HtmlContent = ({ content }) => {
  return (
    <div
      className="html-content"
      dangerouslySetInnerHTML={{
        __html: sanitizeWithExceptionsForVideos(content),
      }}
    ></div>
  );
};

export default HtmlContent;
