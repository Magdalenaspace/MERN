const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/findAll', ProductController.findAll);
    app.post('/api/add', ProductController.createProduct);
    app.get('/api/findOne/:id', ProductController.findProduct);
    app.put('/api/edit/:id', ProductController.editProduct);
    app.delete('/api/delete/:id', ProductController.deleteProduct)
}