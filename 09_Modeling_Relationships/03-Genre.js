const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

const genreSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true, 
        minLength: 5,
        maxLength: 50
    }
});

const Genre = mongoose.model('Genre', genreSchema);

mongoose.connect('mongodb://localhost:27018/genres')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
      
const Movie = mongoose.model('Movie', new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    }, 
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }
}));

 app.get('/api/', async (req, res) => {
    const movies = await Movie.find();
    res.send(movies);
});

app.post('/api/movies', async (req, res) => {
    const genre = new Genre({ name: req.body.name });
    const movie = new Movie({
        title: req.body.title,
        genre: genre,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    await movie.save();
    res.send(movie);
}
);

app.listen(port, () => console.log(`Listening on port ${port}...`));