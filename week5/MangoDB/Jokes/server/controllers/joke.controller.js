const Joke = require('../models/joke.models');  
// Houses all  logic for creating, retrieving, updating, and deleting data.
//constructor function which can create new user objects
// brings exported model

const getAllJokes = (req, res) => {
Joke.find()
    .then((allJokes) => res.json({jokes: allJokes}))
    .catch((err) => console.log(err));
};

const getJokeById = (req, res) => {
    const { params } = req;
    Joke.findOne({ _id: params._id })
    .then((joke) => res.json(joke))
    .catch((err) => console.log(err));
};

const createNewJoke = (req, res) => {
    const { body } = req;
    Joke.create(body)
    .then((newJoke) => res.json({newJokes: newJoke}))
    .catch((err) => console.log(err));
};

const updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
})
    .then((updatedJoke) => res.json(updatedJoke))
    .catch((err) => console.log(err));
};

const deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

module.exports = {
    getAllJokes,
    getJokeById,
    createNewJoke,
    updateJoke,
    deleteJoke,
};