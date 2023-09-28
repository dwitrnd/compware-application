const courseRouter = require("express").Router();
const courseController = require("../controllers/courseController");

courseRouter.post("/", courseController.post);

courseRouter.post("/find-by-name", courseController.findByName);

courseRouter.get("/", courseController.get);
courseRouter.get("/:id", courseController.getOne);
courseRouter.get("/filter", courseController.filterByCategory);
courseRouter.patch("/:id", courseController.patch);
courseRouter.delete("/:id", courseController.delete);

module.exports = courseRouter;
