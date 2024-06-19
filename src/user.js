const express = require("express");
const router = express.Router();
const User = require("./modal/user");

// save user task
router.post("/user", async (req, res) => {
  try {
    const userInfo = new User(req.body);
    const user = await userInfo.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get users tasks
router.get("/user", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get user task by id
router.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete user task by id
router.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    if (!id) {
      return res.status(400).send();
    }
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// update user task by id
router.put("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
