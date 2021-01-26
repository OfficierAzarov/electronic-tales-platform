const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  richLinks: [
    {
      reference: String,
      name: String,
      content: String,
      needsASpaceAfter: Boolean,
    },
  ],
  thumbnail: String,
  category: String,
});

module.exports = QuoteEntity = mongoose.model('quote', QuoteSchema);
