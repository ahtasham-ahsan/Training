const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const login = require('./routes/login');
const gameCodeGenerator = require('./routes/gameCodeGenerator');
const healthCheck = require('./routes/health_Check');
const authorize = require("./middleware/auth");

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use("/api/login", login);
app.use("/api/generate-codes", gameCodeGenerator);
app.use("/api/health-check", healthCheck);
app.get('/', authorize, (req, res) => {
    res.redirect('/api/health-check');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;