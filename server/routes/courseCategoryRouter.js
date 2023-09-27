const courseCategoryRouter = require("express").Router();
const courseCategoryController = require("../controllers/coursreCategoryController");

courseCategoryRouter.post("/", courseCategoryController.post);
courseCategoryRouter.get("/", courseCategoryController.get);
courseCategoryRouter.get("/:id", courseCategoryController.getOne);
courseCategoryRouter.patch("/:id", courseCategoryController.patch);
courseCategoryRouter.delete("/:id", courseCategoryController.delete);

module.exports = courseCategoryRouter;
