const mongoose = require('mongoose');

const TooLateToAskSchema = new mongoose.Schema({
  text: {
    fr: String,
    en: String,
  },
  subtext: { fr: String, en: String },
  thumbnail: String,
  world: String,
  answerSlug: String,
});

module.exports = mongoose.model('tooLateToAsk', TooLateToAskSchema, 'toolatetoasksdoors');
