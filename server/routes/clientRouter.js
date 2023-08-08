const clientController = require("../controllers/clientController");
const clientRouter = require("express").Router();

clientRouter.get("/", clientController.get);
clientRouter.post("/", clientController.post);
clientRouter.patch("/:id", clientController.patch);
clientRouter.delete("/:id", clientController.delete);
clientRouter.get("/:id", clientController.getOne);

module.exports = clientRouter;
