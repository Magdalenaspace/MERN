const Product = require('../models/product.model');

module.exports = {
    findAllProducts: (req, res) => {
        Product.find()
            .then((AllProducts) => {
                res.status(200).json(AllProducts)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    createProducts: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                res.status(201).json(newProduct)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    findOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then((OneProduct) => {
                res.status(200).json(OneProduct)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    updateProduct: (req, res) => {
        Product.findOneAndUpdate(        
            {_id: req.params.id}, 
            req.body, 
            {new:true, runValidators:true})
            .then((updatedProduct) => {
                res.status(201).json(updatedProduct)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }, 
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
        .then((result) => {
            res.status(204).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    }
}
