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
        required: true, 
        minlength: 5,
        maxlength: 50,
    },
    age: {
        type: Number,
        // min: 18,
        // max: 65
    },
    company: String,
    pos: {type: String, required: function(){ // arrow function will not work here
        return this.age > 25;
    }} , 
    stack: {
        type: String,
        enum: ['MERN', 'MEAN', 'MEVN']
    }
});

const model = mongoose.model('Model', Schema);

async function add_User(name, age, pos, company){  
    const user = new model({
        name: name,
        age: age,
        company: company
        pos: pos
    })
    try{
        user.validate();
       const result =  await user.save();
        console.log('User Added', result);
    }catch(err){
        console.log('Error', err.message);
    }
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
});const express = require('express');
const mongoose = require('mongoose');
