const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  emotion: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    default: "Ann O'Nymous",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  thumbnail: String,
  category: String,
});

module.exports = QuoteEntity = mongoose.model('quote', QuoteSchema);
