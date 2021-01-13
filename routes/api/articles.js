const express = require('express');
const router = express.Router();

// @route   POST api/articles
// @desc    Add article
// @access  Public
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('Articles route');
});

module.exports = router;
