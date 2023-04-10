const JokeController = require("../controllers/joke.controller"); 
// all routes dealing with the model.
// routes talk with controller, importing everything exported from the controller file

module.exports = (app) => {
    app.get("/api/jokes", JokeController.getAllJokes);
    app.post("/api/jokes", JokeController.createNewJoke);
    app.get("/api/jokes/:_id", JokeController.getJokeById);
    app.put("/api/jokes/:_id", JokeController.updateJoke);
    app.delete("/api/jokes/:_id", JokeController.deleteJoke);
};