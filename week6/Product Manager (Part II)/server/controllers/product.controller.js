const Product = require('../models/product.model')

module.exports = {
    findAll: (req, res) => {
        Product.find()
        .then((allProducts) => {
            res.status(200).json({ products: allProducts})
            // console.log(allProducts)
        })
        .catch((err) => {res.status(400).json({message: 'Something went wrong', error: err })})
    },

    createProduct: (req, res) => {
        Product.create(req.body)
        .then((createdProduct) => {
            res.status(201).json({ created: createdProduct})
        })
        .catch((err) => {res.status(400).json({message: 'Something went wrong', error: err })})
    },

    findProduct: (req, res) => {
        console.log(req.params);
        Product.findOne({_id: req.params.id})
        .then((aProduct) => {
            res.status(200).json({product: aProduct})
        })
        .catch((err) => {res.status(400).json({message: 'Something went wrong', error: err })})
    },

    editProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((editedProduct) => {
            res.status(201).json({updated : editedProduct })
        })
        .catch((err) => {res.status(400).json({message: 'Something went wrong', error: err })})
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
        // res.status(204).send()
        // console.log('success')
        .then((result) => {
            res.json({result: result})
            console.log('success')
        })
        .catch((err) => {res.status(400).json({message: 'Something went wrong', error: err })})

    }

}
