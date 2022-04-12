import DOMPurify from 'dompurify';
import { allowedVideoSourcesList } from '../../dictionnary/allowedSourcesList';

DOMPurify.addHook('uponSanitizeElement', (node, data) => {
  if (data.tagName === 'iframe') {
    const src = node.getAttribute('src') || '';
    if (!allowedVideoSourcesList.some((source) => src.startsWith(source))) {
      return node.parentNode.removeChild(node);
    }
  }
});

export const sanitizeWithExceptionsForVideos = (unsanitizedHtml) => {
  return DOMPurify.sanitize(unsanitizedHtml, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'],
  });
};

export const sanitize = (unsanitizedHtml) => {
  return DOMPurify.sanitize(unsanitizedHtml);
};

/**
 * It takes in a string of unsanitized HTML and returns an object with a property called __html that
 * contains the sanitized HTML.
 * @param unsanitizedHtml - This is the HTML that you want to sanitize.
 * @returns An object with a property of __html.
 */
export const generateSanitizedDangerouslySetInnerHtml = (unsanitizedHtml) => {
  return { __html: DOMPurify.sanitize(unsanitizedHtml) };
}
