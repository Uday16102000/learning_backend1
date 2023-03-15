//require the library
const mongoose= require('mongoose');

//connect to db
// mongoose.connect('mongodb://127.0.0.1:27017/contacts_list_db');
mongoose.connect('mongodb://127.0.0.1:27017/test');

//acquire connection (to check if it succesful)
const db= mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting db'));


//up and running msg
db.once('open',function(){
    console.log('Successfully connected to the database');

});
// const mongoose = require('mongoose');


// mongoose.connect('mongodb://0.0.0.0:27017/test');

// const db = mongoose.connection;

// db.on('err',console.error.bind(console,'Errror in connecting to MongoDB'));

// db.once('open',function(){
//     console.log('connected to DataBase :: MongoDB');
// })

// module.exports = db;

