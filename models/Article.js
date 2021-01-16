const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
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

module.exports = ArticleEntity = mongoose.model('article', ArticleSchema);
