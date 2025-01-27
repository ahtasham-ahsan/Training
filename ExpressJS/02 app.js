const  express = require('express');
const Joi = require('joi');
const app = express(); // returns a function

app.use(express.json());

const courses = [
    {id:1, name: "Course_1"},
    {id:2, name: "Course_2"},
    {id:3, name: "Course_3"},
    {id:4, name: "Course_4"},
];
// app.get();
// app.post();
// app.delete();
// app.put();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    // res.send([2,3,4]);
    res.send(courses);
});

// Routes
app.get('/api/courses/:id', (req, res)=>{
    // res.send(req.params.id);

    const schema = {
        name: Joi.string().min(3).required()
    }
    const results = Joi.validate(req.body, schema)
    console.log(results);
    
    const course =courses.find(c => c.id === parseInt(req.params.id))
    if(!course) //404
    {
        res.status(404).send('Course Not Found'); 
    }
    else{
        res.send(course);
    }
});
// Multiple Params
app.get('/api/:posts/:months', (req, res)=>{
    res.send(req.params);
});

app.post('/api/courses', (req, res)=> {
    
    if(!req.body.name || req.body.name.length<3){
        req.status(400).send('Name is required and should be minimum 4 characters');
        return;
    }
    
    const course = {
        id: courses.length + 1, 
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Listening to port ${port}`);
});