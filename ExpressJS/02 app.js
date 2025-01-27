const express = require('express');
const Joi = require('joi'); // Import Joi
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: "Course_1" },
    { id: 2, name: "Course_2" },
    { id: 3, name: "Course_3" },
    { id: 4, name: "Course_4" },
];

// Get all courses
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// Get course by ID
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('Course Not Found');
    }
    res.send(course);
});

// Add a new course
app.post('/api/courses', (req, res) => {
    // Validation schema
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    const { error } = schema.validate(req.body); // Validate request body
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };

    courses.push(course);
    res.send(course);
});

// Update a course
app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('Course Not Found');
    }

    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    const { error } = schema.validate(req.body); // Validate request body
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    course.name = req.body.name;
    res.send(course);
});

// Delete a course (optional implementation)
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('Course Not Found');
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
