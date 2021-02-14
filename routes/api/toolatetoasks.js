const express = require('express');
const router = express.Router();
const TooLateToAskEntity = require('../../models/TooLatetoAsk');

// @route   GET api/toolatetoasks/world
// @desc    Test route
// @access  Public
router.get('/:world', async (req, res) => {
  try {
    const world = req.params.world;
    const tooLateToAsks = await TooLateToAskEntity.find({ world: world });
    res.json(tooLateToAsks);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/toolatetoasks/slug
// @desc    Test route
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const slug = req.params.slug;
    const tooLateToAsks = await TooLateToAskEntity.find({ 'answer.slug': slug });
    res.json(tooLateToAsks);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
