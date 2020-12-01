import DOMPurify from 'dompurify';
import { allowedVideoSourcesList } from '../../config/allowedSourcesList';

DOMPurify.addHook('uponSanitizeElement', (node, data) => {
  if (data.tagName === 'iframe') {
    const src = node.getAttribute('src') || ''
    if (!allowedVideoSourcesList.some(source => src.startsWith(source))) {
      return node.parentNode.removeChild(node);
    }
  }
})

export const convertToCleanHtml = (unsanitizedHtml) => {
  return DOMPurify.sanitize(unsanitizedHtml, { ADD_TAGS: ["iframe"], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling']});
};