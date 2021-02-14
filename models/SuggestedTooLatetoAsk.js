const mongoose = require('mongoose');

const SuggestedTLTA = new mongoose.Schema({
  question: {
    type: String,
    requird: true,
  },
  answer: {
    simpleDefinition: String,
    analogy: String,
    realWorldExample: String,
  },
  name: String,
});

module.exports = mongoose.model('suggestedTLTA', SuggestedTLTA);
