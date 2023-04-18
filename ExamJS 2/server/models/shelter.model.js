const mongoose = require('mongoose');

const ShelterSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Name is required'],
        minLength:[3, 'The Name must be 3 or more characters'],
        maxLength:[50, 'The Name is too long']
    },
    type: {
        type: String,
        required:[true, 'Type is required'],
        min:[3, 'The Type must be 3 or more characters'],
        maxLength:[50, 'The Name is too long']
    },
    description:{
        type: String,
        required:[true, 'Description is required'],
        minLength:[3, 'The Description must be 3 or more characters'],
        maxLength:[50, 'The Description is too long']
    },
    skills: {
        type: [String]
    },
    likes: {
        type: Number,
        default: 0
    }
}, {timestamps:true})

const Shelter = mongoose.model('Shelter', ShelterSchema)
module.exports = Shelter