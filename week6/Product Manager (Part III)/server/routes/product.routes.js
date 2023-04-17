const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/AllProducts', ProductController.findAllProducts);
    app.post('/api/newProduct', ProductController.createProducts);
    app.get('/api/oneProduct/:id', ProductController.findOneProduct);
    app.put('/api/updatedProduct/:id', ProductController.updateProduct);
    app.delete('/api/deletedProduct/:id', ProductController.deleteProduct);

}