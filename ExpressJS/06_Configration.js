const config = require('config');
const Joi = require('joi');
const express = require('express');
const app = express();

console.log('Application Name', config.get('name'));
console.log('Mail Server', config.get('mail.host'));
console.log('Mail Password', config.get('mail.password'));



if(app.get('env') === 'development'){
    console.log('Development Environment Enabled');
}else{
    console.log(`${app.get('env')} is Enabled`);
}

const courses = [
    {id: 1,name: 'React JS'},
    {id: 2,name: 'Node JS'},
    {id: 3,name: 'Express JS'},
    {id: 4,name: 'Mongoose'}
]
app.use(express.json());
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