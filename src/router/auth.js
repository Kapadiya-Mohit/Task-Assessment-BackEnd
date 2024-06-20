const express = require("express");
const router = express.Router();
const Auth = require("../modal/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const JWT_SECRET = crypto.randomBytes(64).toString("hex");

// hash password
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10); // Adjust rounds as needed
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

// save user
router.post("/auth/signup", async (req, res) => {
  try {
    const password = req.body.password;
    const hashedPassword = await hashPassword(password);
    const body = { ...req.body, password: hashedPassword };
    const authInfo = new Auth(body);
    const user = await authInfo.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

//login user
router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h", // Token expiration time
    });

    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
