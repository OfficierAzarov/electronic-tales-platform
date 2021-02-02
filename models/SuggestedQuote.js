const mongoose = require('mongoose');

const SuggestedQuoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  name: String,
});

module.exports = SuggestedQuoteEntity = mongoose.model('suggestedQuote', SuggestedQuoteSchema);
