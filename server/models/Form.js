const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: String,
  questions: [
    {
      questionText: String,
      questionType: { type: String, enum: ['text', 'mcq'] },
      options: [String],
    },
  ],
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
});

module.exports = mongoose.model('Form', formSchema);