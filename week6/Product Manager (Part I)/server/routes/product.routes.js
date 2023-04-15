const ProductController = require("../controllers/product.controller"); //We import the object exported from the controller

module.exports = (app)=>{
    app.post("/api/products", ProductController.createProduct);
    //We are exporting a function that takes in a parameter of app (will get its value/argument passed, "express()", in server.js)
    //We use the express method to make a post request to "/api/products" route, which will run the function found at ProductController.createProduct

}
