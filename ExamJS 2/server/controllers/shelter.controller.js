const Shelter = require('../models/shelter.model');

module.exports = {
    findAllPets: (req, res) => {
        Shelter.find()
            .then((AllPets) => {
                res.status(200).json(AllPets)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    addAPet: (req, res) => {
        Shelter.create(req.body)
            .then((newPet) => {
                res.status(201).json(newPet)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    findOnePet: (req, res) => {
        Shelter.findOne({_id: req.params.id})
            .then((OnePet) => {
                res.status(200).json(OnePet)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    editPet: (req, res) => {
        Shelter.findOneAndUpdate(        
            {_id: req.params.id}, 
            req.body, 
            {new:true, runValidators:true})
            .then((updatedPet) => {
                res.status(201).json(updatedPet)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }, 
    adoptPet: (req, res) => {
        Shelter.deleteOne({_id: req.params.id})
        .then((result) => {
            res.status(204).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    }
}
