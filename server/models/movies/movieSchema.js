const mongoose = require('mongoose');

const movieSchema = mongoose.Schema;


const movie = new movieSchema({
    title: String,
    image: String,
    synopsis: String,
    rating: String,
    released: String,
    runtime: String,
    largeimage: String,
    unogsdate: String,
    imdbid: String,
    download: String,
});

module.exports = mongoose.model('movie', movie);
