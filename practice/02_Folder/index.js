const express = require('express');
const path = require('path');
const app   = express();
const port  = process.env.PORT || 3000;

app.use('/', require('./routes/blog'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});