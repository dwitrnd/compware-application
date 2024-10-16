const hardwareRouter = require("express").Router();
const hardwareController = require("../controllers/hardwareController");

hardwareRouter.post("/", hardwareController.post);
hardwareRouter.get("/", hardwareController.get);
hardwareRouter.get("/:id", hardwareController.getOne);
hardwareRouter.patch("/:id", hardwareController.patch);
hardwareRouter.delete("/:id", hardwareController.delete);

module.exports = hardwareRouter;