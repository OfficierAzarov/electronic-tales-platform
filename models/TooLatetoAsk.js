const mongoose = require('mongoose');
const ArticleEntity = require('./Article').schema;

const TooLateToAskSchema = new mongoose.Schema({
  text: String,
  subtext: String,
  thumbnail: String,
  world: String,
  answerSlug: String,
});

module.exports = TooLateToAskEntity = mongoose.model('tooLateToAsk', TooLateToAskSchema);
