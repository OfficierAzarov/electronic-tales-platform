import DOMPurify from 'dompurify';

export const convertToCleanHtml = (property) => {
  return DOMPurify.sanitize(property);
};