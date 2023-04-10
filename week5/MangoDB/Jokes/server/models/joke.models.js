const mongoose = require('mongoose');
// Creating Mongoose Schema that turn into models Model

const JokeSchema = new mongoose.Schema({   //blueprint for data document
//object
        setup: String,
        punchline: String,
    },
    { timestamps: true }
    );

const Joke = mongoose.model('Joke', JokeSchema);  //model lifts the data blueprint to interaction and crud operation

module.exports = Joke;  
// allowing interactions
