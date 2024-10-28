const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: {type:String},
  priority: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
  completed: { type: Boolean, default: false }
});

const TaskManager = mongoose.model('TaskManager', taskSchema);

module.exports = TaskManager;