const express = require('express');
const router = express.Router();

// @route   GET api/articles
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Categories route'));

module.exports = router;
