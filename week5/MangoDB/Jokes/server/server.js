const express = require("express");
const app = express();


require("./config/mongoose.config"); //calling mongoose config and running the connect function 

app.use(express.json(), express.urlencoded({ extended: true })); // handling post req

const JokeRoutes = require("./routes/joke.routes");
JokeRoutes(app); //routes get stored here  

app.listen(8000, () => console.log(`Express running on port ${8000}`));// const mongoose = require('mongoose');

// npm i express mongoose 
// nodemon server.js