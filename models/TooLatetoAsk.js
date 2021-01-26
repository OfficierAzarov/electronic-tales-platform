const mongoose = require('mongoose');
const ArticleEntity = require('./Article').schema;

const TooLateToAskSchema = new mongoose.Schema({
  text: String,
  subtext: String,
  thumbnail: String,
  answer: {
    title: String,
    slug: String,
    content: String,
    richLinks: {
      reference: String,
      name: String,
      content: String,
      needsASpaceAfter: Boolean,
    },
  },
});

module.exports = TooLateToAskEntity = mongoose.model('tooLateToAsk', TooLateToAskSchema);
