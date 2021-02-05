const express = require('express');
const { check, validationResult } = require('express-validator');
const fetch = require('node-fetch');
const config = require('config');

const recaptchaKey = config.get('RECAPTCHA_SECRET_KEY');

const router = express.Router();

const SuggestedTLTASEntity = require('../../models/SuggestedTooLatetoAsk');
const SuggestedQuoteEntity = require('../../models/SuggestedQuote');
const { generateTodayDateString } = require('../../utils/date');
const { sanitize } = require('../../utils/sanitization');

// @route   POST api/suggestions/toolatetoasks
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
    if (!checkReCaptcha(req.body.reCaptchaToken)) {
      return res.status(400).json({ errors: 'Oh, go away, little bot.' });
    }

    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      return res.status(400).json({ errors: validationErrors.array() });
    }

    const { question, simpleDefinition, analogy, realWorldExample, name } = req.body;

    // Let's sanitize!
    const sanitizedQuestion = sanitize(question);
    const sanitizedSimpleDefinition = sanitize(simpleDefinition);
    const sanitizedAnalogy = sanitize(analogy);
    const sanitizedRealWorldExample = sanitize(realWorldExample);
    const sanitizedName = sanitize(name);

    try {
      // check if tooLateToAskPost already exists
      let suggestedTLTAS = await SuggestedTLTASEntity.findOne({ question: sanitizedQuestion });
      if (suggestedTLTAS) {
        return res.status(400).json({ errors: [{ msg: 'The question has already been posted' }] });
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
      return res.json(suggestedTLTAS);
    } catch (error) {
      console.log(`Aouch... ${error.msg}`);
      return res.status(500).send('Server error');
    }
  }
);

// @route   POST api/suggestions/toolatetoasks
// @desc    Test route
// @access  Public
router.post(
  '/quotes',
  [check('quote').not().isEmpty().trim().escape(), check('name').trim().escape()],
  async (req, res) => {
    const isHuman = await checkReCaptcha(req.body.reCaptchaToken);
    console.log(isHuman);
    if (!isHuman) {
      return res.status(400).json({ errors: 'Oh, go away, little bot.' });
    }

    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      return res.status(400).json({ errors: validationErrors.array() });
    }

    const { quote, name } = req.body;

    // Let's sanitize! Actually, mongoSanitize is redundant with mongoose (which converts input to string and therefore unarms it)... But let's doubleproof.
    const sanitizedQuote = sanitize(quote);
    const sanitizedName = sanitize(name);

    try {
      // check if quote already exists
      let suggestedQuote = await SuggestedQuoteEntity.findOne({ quote: sanitizedQuote });

      if (suggestedQuote) {
        return res.status(400).json({ errors: [{ msg: 'The quote has already been posted' }] });
      }

      // const today = generateTodayDateString();
      const today = generateTodayDateString();

      // create the new tooLateToAskPost
      suggestedQuote = new SuggestedQuoteEntity({
        quote: sanitizedQuote,
        name: sanitizedName,
        date: today, // TO DO : change to actual date when admin backoffice is ready
      });

      await suggestedQuote.save();
      res.json(suggestedQuote);
    } catch (error) {
      console.log(`Aouch... ${error}`);
      res.status(500).send('Server error');
    }
  }
);

const checkReCaptcha = async (token) => {
  console.log('inside checkrecaptcha. The token is ', token);
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaKey}&response=${token}`,
    {
      method: 'POST',
    }
  );
  const data = await res.json();
  console.log(data);
  return data.success;
};

module.exports = router;
