const workshopController = require("../controllers/workshopController");
// const workshop = require("../models/workshop"); DONT KEEP THIS LINE
const workshopRouter = require("express").Router();

workshopRouter.get("/", workshopController.get);
workshopRouter.post("/", workshopController.post);
workshopRouter.patch("/:id", workshopController.patch);
workshopRouter.delete("/:id", workshopController.delete);
workshopRouter.get("/:id", workshopController.getOne);

module.exports = workshopRouter;
