const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productTitle: {
        type:String,
        required:[true, 'Title is required'],
        minLength:[3, 'The title must be 3 or more characters'],
        maxLength:[50, 'The Title is too long']
    },
    productPrice: {
        type: Number,
        min:[1, 'Price cant be above $1']
    },
    productDesc:{
        type: String,
        required:[true, 'Description is required'],
        minLength:[3, 'The Description must be 3 or more characters'],
        maxLength:[50, 'The Description is too long']
    },
    edible:{
        type:Boolean,
        required:[true, 'You must fill this out']
    }
}, {timestamps:true})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product