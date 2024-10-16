const newsletterRouter = require("express").Router();
const newsletterController = require("../controllers/newsletterController");

newsletterRouter.post("/", newsletterController.post);
newsletterRouter.get("/", newsletterController.get);
newsletterRouter.get("/:id", newsletterController.getOne);
newsletterRouter.patch("/:id", newsletterController.patch);
newsletterRouter.delete("/:id", newsletterController.delete);

module.exports = newsletterRouter;