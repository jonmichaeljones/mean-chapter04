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

var gracefulShutdown = function(msg, callback){
    mongoose.connection.close(function(){
       console.log('Mongoose disconnected through ' + msg); 
       callback();
    });
}


//SIGUSR2
process.once('SIGUSR2', function(){
   gracefulShutdown('nodemon restart', function(){
      process.kill(process.pid, 'SIGUSR2');
   });
});

//SIGINT
process.once('SIGINT', function(){
   gracefulShutdown('app termination', function(){
      process.exit(0);
   });
});

//SIGTERM
process.once('SIGTERM', function(){
   gracefulShutdown('Heroku app shutdown', function(){
      process.exit(0);
   });
});