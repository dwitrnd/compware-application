const placementController = require("../controllers/placementController");
const placementRouter = require("express").Router();

placementRouter.get("/", placementController.get);
placementRouter.post("/", placementController.post);
placementRouter.patch("/:id", placementController.patch);
placementRouter.delete("/:id", placementController.delete);
placementRouter.get("/:id", placementController.getOne);

module.exports = placementRouter;
