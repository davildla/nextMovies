require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan');


const app = express()
let PORT = process.env.PORT || 8080;

require('./configs/database');

// controllers
const moviesControllers = require('./controllers/moviesController');


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/api/flow', flowController);
app.use('/api/movies', moviesControllers);

app.listen(PORT, () => console.log(`listen on port ${PORT}`));

