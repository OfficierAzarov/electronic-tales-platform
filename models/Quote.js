const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  emotion: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    default: "Ann O'Nymous",
  },
  date: {
    type: String, // TO DO : change to date when backoffice is ready
  },
});

module.exports = mongoose.model('quote', QuoteSchema);
