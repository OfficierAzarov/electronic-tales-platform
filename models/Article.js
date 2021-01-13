const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    requird: true,
  },
  slug: {
    type: String,
    requird: true,
  },
  content: {
    type: String,
    requird: true,
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

module.exports = Article = mongoose.model('article', ArticleSchema);
