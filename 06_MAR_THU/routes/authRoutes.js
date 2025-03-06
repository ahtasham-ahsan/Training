const User = require("../models/User");
const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.post("/signup", async (req, res) => {
    try {
      const { firstName, lastName, emailAddress, password } = req.body;
      const existingUser = await User.findOne({ emailAddress });
      if (existingUser) return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ firstName, lastName, emailAddress, password: hashedPassword });
      await user.save();
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.post("/login", async (req, res) => {
    try {
      const { emailAddress, password } = req.body;
      const user = await User.findOne({ emailAddress });
      if (!user) return res.status(400).json({ message: "Invalid email or password" });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      const verificationCode = Math.floor(100000 + Math.random() * 900000);
      user.verificationCode = verificationCode;
      await user.save();
      res.json({
          message: "Login successful",
          token,
          verificationCode
      });
  
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
  }
  });


module.exports = router;