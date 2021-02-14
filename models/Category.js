const mongoose = require('mongoose');
const ArticleEntity = require('./Article').schema;
const Schema = mongoose.Schema;

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  articles: [{ type: Schema.Types.ObjectId, ref: 'article' }],
});

module.exports = mongoose.model('category', CategorySchema);
