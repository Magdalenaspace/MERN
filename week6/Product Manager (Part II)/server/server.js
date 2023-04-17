const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin:"http://localhost:3000" 
}))


require("./config/mongoose.config"); 
// calling the mongoose.config and running the connect function 

app.use(express.json(), express.urlencoded({ extended: true }));


require('./routes/product.routes')(app);

// require('./routes/product.routes');
// const ProductRoutes = require("./routes/product.routes");
// ProductRoutes(app);


app.listen(8000, () => console.log("The server is all fired up on port 8000"));