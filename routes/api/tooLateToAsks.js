const express = require('express');
const router = express.Router();

// @route   POST api/toolatetoasks
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Too-late-to-asks route'));

module.exports = router;
