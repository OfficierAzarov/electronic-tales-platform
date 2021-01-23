const express = require('express');
const router = express.Router();
const ArticleEntity = require('../../models/Article');

// @route   GET api/articles
// @desc    Get all articles
// @access  Public
router.get('/infos/:world', async (req, res) => {
  try {
    const world = req.params.world;
    const articles = await ArticleEntity.find({ world: world }).select('-content -richLinks');
    res.json(articles);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/posts/toolatetoasks
// @desc    Test route
// @access  Public
router.post('/', async (req, res) => {
  // const validationErrors = validationResult(req);
  // if (!validationErrors.isEmpty()) {
  //   return res.status(400).json({ errors: validationErrors.array() });
  // }
  // console.log(req.body);
  const { title, slug, content, richLinks, thumbnail, category } = req.body;
  try {
    // check if tooLateToAskPost already exists
    // let article = await ArticleEntity.findOne({ question });
    // if (tooLateToAskPost) {
    //   return res.status(400).json({ errors: [{ msg: 'The question has already been posted' }] });
    // }

    // create the new tooLateToAskPost
    article = new ArticleEntity({
      title,
      slug,
      content,
      richLinks,
      thumbnail,
      category,
    });

    await article.save();
    res.send('Your article has been saved.');
  } catch (error) {
    console.log(`Aouch... ${error.msg}`);
    res.status(500).send('Server error');
  }
});

module.exports = router;
