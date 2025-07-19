const Form = require('../models/Form');

exports.createForm = async (req, res) => {
  const { title, questions } = req.body;
  try {
    const form = await Form.create({ title, questions, admin: req.user.id });
    res.status(201).json(form);
  } catch (err) {
    res.status(500).json({ message: 'Form creation failed' });
  }
};

exports.getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.formId);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.json(form);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch form' });
  }
};

exports.getFormsByAdmin = async (req, res) => {
  try {
    const forms = await Form.find({ admin: req.params.adminId });
    res.json(forms);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch forms' });
  }
};