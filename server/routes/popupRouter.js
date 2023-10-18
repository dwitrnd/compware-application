const popupController = require("../controllers/popupController");
const popupRouter = require("express").Router();

popupRouter.get("/", popupController.get);
popupRouter.post("/", popupController.post);
popupRouter.delete("/:id", popupController.delete);
popupRouter.get("/:id", popupController.getOne);

module.exports = popupRouter;
