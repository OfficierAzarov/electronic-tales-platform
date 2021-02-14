const express = require('express');
const router = express.Router();
const ArticleEntity = require('../../models/Article');

// @route   GET api/articles/infos/:world
// @desc    Get all articles info by world
// @access  Public
router.get('/infos/:world', async (req, res) => {
  try {
    const world = req.params.world;
    const articles = await ArticleEntity.find({ world: world, type: 'regular' }).select(
      '-content -richLinks'
    );
    res.json(articles);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/articles/:slug
// @desc    Get ana rticle with its slug
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const slug = req.params.slug;
    const articles = await ArticleEntity.find({ slug: slug });
    res.json(articles);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
