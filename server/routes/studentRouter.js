const studentController = require("../controllers/studentController");
const studentRouter = require("express").Router();

studentRouter.get("/", studentController.get);
studentRouter.post("/", studentController.post);
studentRouter.post("/check-id", studentController.checkId);
studentRouter.patch("/:id", studentController.patch);
studentRouter.delete("/:id", studentController.delete);
studentRouter.get("/:id", studentController.getOne);

studentRouter.post("/:token", studentController.checkCertificateToken);

module.exports = studentRouter;
