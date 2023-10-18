const controller = require("../controllers/controller");
const forgotcertificateRouter = require("express").Router();

forgotcertificateRouter.post("/", controller.post);
forgotcertificateRouter.get("/", controller.get);
forgotcertificateRouter.get("/:id", controller.getone);

module.exports = forgotcertificateRouter;
