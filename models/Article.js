const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  world: String,
  type: String,
  title: {
    fr: String,
    en: String,
  },
  slug: String,
  content: {
    fr: String,
    en: String,
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
  category: { fr: String, en: String },
});

module.exports = mongoose.model('article', ArticleSchema);
