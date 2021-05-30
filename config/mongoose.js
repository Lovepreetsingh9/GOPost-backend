const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://Lovepreet:1NYrJxeUgBqNEUSg@cluster0.fnl8y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect("mongodb+srv://Lovepreet:1NYrJxeUgBqNEUSg@cluster0.fnl8y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    // console.log('Connected to Database :: MongoDB');
});


module.exports = db;