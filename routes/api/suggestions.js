const express = require('express');
const { check, validationResult } = require('express-validator');
const xss = require('xss');
const router = express.Router();

const SuggestedTLTASEntity = require('../../models/SuggestedTooLatetoAsk');

// @route   POST api/posts/toolatetoasks
// @desc    Test route
// @access  Public
router.post(
  '/too-late-to-asks',
  check('name').isAlphanumeric().trim().escape(),
  check('question').not().isEmpty().isAlphanumeric().trim().escape(),
  check('answer.*').isAlphanumeric().trim().escape(),
  async (req, res) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      res.status(400).json({ errors: validationErrors.array() });
    }

    const { question, answer, name } = req.body;

    // Let's sanitize!
    const sanitizedQuestion = xss(question);
    const sanitizedAnswer = {
      sanitizedSimpleDefinition: xss(answer.simpleDefinition),
      sanitizedAnalogy: xss(answer.analogy),
      sanitizedRealWorldExample: xss(answer.realWorldExample),
    };
    const sanitizedName = xss(name);

    try {
      // check if tooLateToAskPost already exists
      let suggestedTLTAS = await SuggestedTLTASEntity.findOne({ question });
      if (suggestedTLTAS) {
        res.status(400).json({ errors: [{ msg: 'The question has already been posted' }] });
      }

      // create the new tooLateToAskPost
      suggestedTLTAS = new TooLateToAskPostEntity({
        question: sanitizedQuestion,
        answer: sanitizedAnswer,
        name: sanitizedName,
      });

      await suggestedTLTAS.save();
      res.json(suggestedTLTAS);
    } catch (error) {
      console.log(`Aouch... ${error.msg}`);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
