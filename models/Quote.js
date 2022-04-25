const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  text: {
    fr: String,
    en: String,
  },
  author: {
    type: String,
    default: "Ann O'Nymous",
  }
});

module.exports = mongoose.model('quote', QuoteSchema, 'quotes');
