const express = require("express");
const router = express.Router();
const Task = require("../modal/task");

// save task
router.post("/task", async (req, res) => {
  try {
    const taskInfo = new Task(req.body);
    const task = await taskInfo.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get tasks
router.get("/task", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(201).send(tasks);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get  task by id
router.get("/task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete task by id
router.delete("/task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id);
    if (!id) {
      return res.status(400).send();
    }
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

// update task by id
router.put("/task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
