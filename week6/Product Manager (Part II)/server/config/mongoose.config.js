const mongoose = require('mongoose');

const db = "products5";   
mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log(`Established a connection to ${db}`))
        .catch(err => console.log('Something went wrong when connecting to the database ', err));