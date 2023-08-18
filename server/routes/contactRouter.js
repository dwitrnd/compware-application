const contactController = require("../controllers/contactController");
const contactRouter = require("express").Router();

contactRouter.post("/", contactController.post);
contactRouter.get("/", contactController.get);

module.exports = contactRouter;
