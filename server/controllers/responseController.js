const Response = require('../models/Response');

exports.submitResponse = async (req, res) => {
  const { formId } = req.params;
  const { answers } = req.body;
  try {
    const response = await Response.create({ form: formId, answers });
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json({ message: 'Submission failed' });
  }
};

exports.getResponsesByFormId = async (req, res) => {
  try {
    const responses = await Response.find({ form: req.params.formId });
    res.json(responses);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch responses' });
  }
};
