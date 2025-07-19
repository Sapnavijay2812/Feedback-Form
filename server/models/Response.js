const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  form: { type: mongoose.Schema.Types.ObjectId, ref: 'Form' },
  answers: [String],
});

module.exports = mongoose.model('Response', responseSchema);