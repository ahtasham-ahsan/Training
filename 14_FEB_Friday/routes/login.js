const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const secretKey = process.env.SECRET_KEY

router.post('/', (req, res) => {
    const { username, password } = req.body;
    if (username === 'user' && password === 'password') {
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        return res.status(200).json({ token });
    }
    return res.status(401).send('Invalid credentials');
});

module.exports = router;
