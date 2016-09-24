//include Mongoose - talks to MongoDB for us
var mongoose = require('mongoose');

//db connection string
var dbURI = 'mongodb://localhost/Loc8r';

//connect
mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});

//error
mongoose.connection.on('error', function() {
    console.log('Mongoose connection error ' + dbURI);
});

//disconnected
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});