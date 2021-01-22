const mongoose = require('mongoose');
const ArticleEntity = require('./Article').schema;

const TooLateToAskSchema = new mongoose.Schema({
  questionText: String,
  thumbnail: String,
  answer: { ArticleEntity },
});

module.exports = TooLateToAskEntity = mongoose.model('tooLateToAsk', TooLateToAskSchema);
