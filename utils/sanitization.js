const xss = require('xss');
const mongoSanitize = require('mongo-sanitize');

const sanitize = (inputToSanitize) => {
  const sanitizedInput = mongoSanitize(xss(inputToSanitize));
  return sanitizedInput;
};

exports.sanitize = sanitize;
