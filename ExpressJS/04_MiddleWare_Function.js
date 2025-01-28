const Joi = require('joi');
const express = require('express');
const app = express();

const courses = [
    {id: 1,name: 'React JS'},
    {id: 2,name: 'Node JS'},
    {id: 3,name: 'Express JS'},
    {id: 4,name: 'Mongoose'}
]
// Built-in Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true})); // Help us in making key value pairs 

// static - serves static files
app.use(express.static('Folder_Name'));


// Writing Custom Middleware functions 
app.use(function (req, res, next){
    console.log('Logging...');
    next();
});

app.use(function (req, res, next){
    console.log('Authenticating...');
    next();
});

app.get('/api/courses', (req, res) =>{
    res.send(courses);
});

function validate_Schema(body){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const obj = schema.validate(body);
    return obj.error;
}

app.post('/api/courses', (req, res) =>{
    const error = validate_Schema(req.body);
    if(error){
        return res.status(404).send(error.details[0].message)
    }
    const course = {
        id: courses.length + 1, 
        name: req.body.name 
    };

    courses.push(course);
    res.send(course)
});

const port = process.env.PORT || 3000;

app.listen(port)