const trainerController = require("../controllers/trainerController");
const trainerRouter = require("express").Router();

trainerRouter.post("/get-by-name", trainerController.getByName);
trainerRouter.get("/", trainerController.get);
trainerRouter.post("/", trainerController.post);
trainerRouter.patch("/:id", trainerController.patch);
trainerRouter.delete("/:id", trainerController.delete);
trainerRouter.get("/:id", trainerController.getOne);

module.exports = trainerRouter;
