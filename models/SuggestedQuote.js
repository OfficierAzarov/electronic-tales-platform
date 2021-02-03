const mongoose = require('mongoose');

const SuggestedQuoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "Ann O'Nymous",
  },
  date: String, // Change when admin backoffice is ready
});

module.exports = SuggestedQuoteEntity = mongoose.model('suggestedQuote', SuggestedQuoteSchema);
