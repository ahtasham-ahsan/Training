const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    pos: String 
});

const model = mongoose.model('Model', Schema);

async function add_User(name, age, pos){  
    const user = new model({
        name: name,
        age: age,
        pos: pos
    })
    await user.save()
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });

}

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/addUser', (req, res) => {
    add_User(req.query.name, req.query.age, req.query.pos);
    res.send('User Added');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});