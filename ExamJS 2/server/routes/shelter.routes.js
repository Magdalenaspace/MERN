ShelterController = require('../controllers/shelter.controller');

module.exports = app => {
    app.get('/api/allPets', ShelterController.findAllPets);
    app.post('/api/newPet', ShelterController.addAPet);
    app.get('/api/onePet/:id', ShelterController.findOnePet);
    app.put('/api/editPet/:id', ShelterController.editPet);
    app.delete('/api/adoptPet/:id', ShelterController.adoptPet);

}