const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/', (req, res) => {
  // res.sendFile('../templates/index.html') ;
  res.sendFile('index.html', { root: path.join(__dirname, '../templates') }); // ✅ Another correct way

});

module.exports = router;