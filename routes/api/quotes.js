const express = require('express');
const router = express.Router();
const QuoteEntity = require('../../models/Quote');

// @route   GET api/quotes
// @desc    Get all quotes
// @access  Public
router.get('/', async (req, res) => {
  try {
    const quotes = await QuoteEntity.find();
    res.json(quotes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
