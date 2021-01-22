const mongoose = require('mongoose');

const TooLateToAskPostSchema = new mongoose.Schema({
  question: {
    type: String,
    requird: true,
  },
  answer: String,
  name: String,
});

module.exports = TooLateToAskPostEntity = mongoose.model(
  'tooLateToAskPost',
  TooLateToAskPostSchema
);
