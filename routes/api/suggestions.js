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
  [
    check('question').not().isEmpty().trim().escape(),
    check('simpleDefinition').trim().escape(),
    check('analogy').trim().escape(),
    check('realWorldExample').trim().escape(),
    check('name').trim().escape(),
  ],
  async (req, res) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      res.status(400).json({ errors: validationErrors.array() });
    }

    const { question, simpleDefinition, analogy, realWorldExample, name } = req.body;

    // Let's sanitize!
    const sanitizedQuestion = xss(question);
    const sanitizedSimpleDefinition = xss(simpleDefinition);
    const sanitizedAnalogy = xss(analogy);
    const sanitizedRealWorldExample = xss(realWorldExample);
    const sanitizedName = xss(name);

    try {
      // check if tooLateToAskPost already exists
      let suggestedTLTAS = await SuggestedTLTASEntity.findOne({ question });
      if (suggestedTLTAS) {
        res.status(400).json({ errors: [{ msg: 'The question has already been posted' }] });
      }

      // create the new tooLateToAskPost
      suggestedTLTAS = new SuggestedTLTASEntity({
        question: sanitizedQuestion,
        answer: {
          simpleDefinition: sanitizedSimpleDefinition,
          analogy: sanitizedAnalogy,
          realWorldExample: sanitizedRealWorldExample,
        },
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
