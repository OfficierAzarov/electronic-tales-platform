const express = require('express');
const router = express.Router();
const ArticleEntity = require('../../models/Article');
const CategoryEntity = require('../../models/Category');

// @route   GET api/categories
// @desc    Get all categories
// @access  Public
router.get('/', async (req, res) => {
  try {
    const categories = await CategoryEntity.find().populate('articles');
    res.json(categories);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/posts/toolatetoasks
// @desc    Test route
// @access  Public
router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    // let newCategory = await CategoryEntity.findOne({ name });
    // if (newCategory) {
    //   return res.status(400).json({ errors: [{ msg: 'The category already exists.' }] });
    // }
    const articles = await ArticleEntity.find({ category: name });

    const newCategory = new CategoryEntity({
      name: name,
      // TO DO : make sure it's the right way to do this
      articles: articles,
    });

    const category = await newCategory.save();
    res.json(category);
  } catch (error) {
    console.log(`Aouch... ${error.msg}`);
    res.status(500).send('Server error');
  }
});

module.exports = router;
