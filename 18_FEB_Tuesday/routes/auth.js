import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import User from '../models/User.js';

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.render('login', { error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.render('login', { error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    user.token = token;
    await user.save();

    res.cookie('token', token, { httpOnly: true });
    res.redirect('/');
  } catch (error) {
    res.render('login', { error: 'An error occurred' });
  }
});

// Signup route
router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', upload.single('profileImage'), async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password || !req.file) {
    return res.render('signup', { error: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.render('signup', { error: 'User already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const profileImage = `/uploads/${req.file.filename}`;

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      profileImage
    });

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
    newUser.token = token;

    await newUser.save();

    res.cookie('token', token);
    res.redirect('/');
  } catch (error) {
    res.render('signup', { error: 'An error occurred' });
  }
});

// Logout route
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/auth/login');
});

export default router;