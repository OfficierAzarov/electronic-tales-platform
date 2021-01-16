const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

const TooLateToAskPostEntity = require('../../models/TooLatetoAsk');

// @route   POST api/posts/toolatetoasks
// @desc    Test route
// @access  Public
router.post('/toolatetoasks', check('question').not().isEmpty(), async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }
  console.log(req.body);
  const { question, answer, name } = req.body;
  try {
    // check if tooLateToAskPost already exists
    let tooLateToAskPost = await TooLateToAskPostEntity.findOne({ question });
    if (tooLateToAskPost) {
      return res.status(400).json({ errors: [{ msg: 'The question has already been posted' }] });
    }

    // create the new tooLateToAskPost
    tooLateToAskPost = new TooLateToAskPostEntity({
      question,
      answer,
      name,
    });

    await tooLateToAskPost.save();
    res.send('Your too-late-to ask has been saved.');
  } catch (error) {
    console.log(`Aouch... ${error.msg}`);
    res.status(500).send('Server error');
  }
});

module.exports = router;
