const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')));
// const my_Middleware = (req, res, next) => {
//   console.log('I am a middleware');
//   next();
// };
// app.use(my_Middleware); 


app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});
app.get('/about', (req, res) => {  // new route
  res.send('About us');
});

app.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});  