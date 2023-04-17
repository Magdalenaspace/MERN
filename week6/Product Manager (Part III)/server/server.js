const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
    
require("./config/mongoose.config"); 
// calling the mongoose.config and running the connect function 
    
app.use(express.json(), express.urlencoded({ extended: true }));
// sets up two middleware functions in an Express.js  using the app.use() method.
//The first is express.json() parses incoming requests with JSON payloads makes the resulting data available on the req.body property. 
//The second is express.urlencoded({ extended: true }). 
//This  parses incoming requests with URL-encoded payloads and makes the resulting data available on the req.body

    
const ProductRoutes = require("./routes/product.routes");
ProductRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));