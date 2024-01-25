const galleryController=require("../controllers/galleryController");
const galleryRouter = require("express").Router();

galleryRouter.post("/",galleryController.post);
galleryRouter.get("/",galleryController.get);
galleryRouter.get("/:id",galleryController.getOne);
galleryRouter.patch("/:id",galleryController.patch);
galleryRouter.delete("/",galleryController.deleteAll);
galleryRouter.delete("/:id",galleryController.delete);
galleryRouter.delete("/:id/images/:imageName", galleryController.deleteImage);

module.exports = galleryRouter;