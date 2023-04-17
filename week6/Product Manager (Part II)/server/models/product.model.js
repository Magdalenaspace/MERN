const mongoose = require('mongoose')

const ProductModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength:[3, 'The title must be 3 or more characters'],
        maxLength:[50, 'The title is too long']
    },

    price: {
        type: Number,
        min:[0, 'No item is available below 0.']
    },

    description: {
        type: String,
        minLength:[3, 'The description must be 3 or more characters'],
        maxLength:[50, 'The description is too long']
    }
}, {timestamps:true});

const Product = mongoose.model('Product', ProductModel);

module.exports = Product;
