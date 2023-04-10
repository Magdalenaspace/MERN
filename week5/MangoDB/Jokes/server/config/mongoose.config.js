const mongoose = require('mongoose'); // requiring(importing) the M package

mongoose.connect('mongodb://127.0.0.1:27017/joke', { //<- DB NAME 
    useNewUrlParser: true,
    useUnifiedTopology: true
}) //connect function to local db
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));