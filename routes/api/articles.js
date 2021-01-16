const express = require('express');
const router = express.Router();

// @route   GET api/articles
// @desc    Get all article
// @access  Public
router.post('/articles', (req, res) => {
  try {
  } catch (error) {}

  res.send('Articles route');
});

module.exports = router;
