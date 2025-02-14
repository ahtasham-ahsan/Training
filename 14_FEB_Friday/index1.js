const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const secretKey = process.env.SECRET_KEY;

app.use(bodyParser.json());

const authorize = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized');
        }

        req.user = decoded;  
        next();
    });
};

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'user' && password === 'password') {
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        return res.status(200).json({ token });
    }
    return res.status(401).send('Invalid credentials');
});

app.get('/', authorize, (req, res) => {
    res.redirect('/api/health-check');
});

app.get('/api/health-check', authorize, (req, res) => {
    res.status(200).send('Authorized');
});
const generateGameCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let gameCode = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        gameCode += characters[randomIndex];
    }
    return gameCode;
};
app.post('/api/generate-codes', authorize, (req, res) => {
    const { noOfGameCodes } = req.body;
    if (!noOfGameCodes || typeof noOfGameCodes !== 'number' || noOfGameCodes <= 0) {
        return res.status(400).send('Invalid request payload');
    }

    const gameCodes = [];
    for (let i = 0; i < noOfGameCodes; i++) {
        gameCodes.push(generateGameCode());
    }

    return res.status(200).json({ gameCodes });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
