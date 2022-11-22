const { Schema, model } = require('mongoose')

const taskSchema = new Schema(
  {
    
  Title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 10
  },

  Description: {
    type: String,
    required: true,
  },

},
{ Timestamps: true }
);

const taskModel = ("tasks", taskSchema);

module.export = taskModel