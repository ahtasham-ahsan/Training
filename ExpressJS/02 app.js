const  express = require('express');
const app = express() // returns a function

// app.get();
// app.post();
// app.delete();
// app.put();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send([2,3,4]);
    // res.send([2,3,4]);
});

// Routes
app.get('/api/courses/:id', (req, res)=>{
    res.send(req.params.id);
});
// Multiple Params
app.get('/api/:posts/:months', (req, res)=>{
    res.send(req.params);
});


const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Listening to port ${port}`);
});