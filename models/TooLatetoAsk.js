const mongoose = require('mongoose');

const TooLateToAskSchema = new mongoose.Schema({
  text: String,
  subtext: String,
  thumbnail: String,
  world: String,
  answerSlug: String,
});

module.exports = mongoose.model('tooLateToAsk', TooLateToAskSchema);
