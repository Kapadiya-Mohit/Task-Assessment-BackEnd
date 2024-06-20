const mongoose = require("mongoose");

// create schema
const taskSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
    enum: ["Todo", "Inprogress", "Done"],
  },
});

// create documentation
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
