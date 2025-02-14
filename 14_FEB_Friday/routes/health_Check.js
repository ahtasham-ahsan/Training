const express = require('express');
const router = express.Router();
const authorize = require('../middleware/auth')

router.get('/', authorize, (req, res) => {
    res.status(200).send('Authorized');
});

module.exports = router;