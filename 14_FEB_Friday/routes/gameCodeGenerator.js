const express = require('express');
const router = express.Router();
const authorize = require("../middleware/auth")


const generateGameCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let gameCode = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        gameCode += characters[randomIndex];
    }
    return gameCode;
};

router.post('/', authorize, (req, res) => {
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
module.exports = router;