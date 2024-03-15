
const mongoose = require('mongoose');

const connectionString = process.env.MONGO_CONNECTION_STRING;

// Set strictQuery to false to prepare for future changes
mongoose.set('strictQuery', false);

mongoose.connect(connectionString,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})