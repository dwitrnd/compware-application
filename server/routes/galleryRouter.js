const galleryControllers=require("../controllers/galleryControllers");
const galleryRouter = require("express").Router();

galleryRouter.post("/",galleryControllers.post);
galleryRouter.get("/",galleryControllers.get);
galleryRouter.get("/:id",galleryControllers.getOne);
galleryRouter.patch("/:id",galleryControllers.patch);
galleryRouter.delete("/",galleryControllers.deleteAll);
galleryRouter.delete("/:id",galleryControllers.delete);
galleryRouter.delete("/:id/images/:imageName", galleryControllers.deleteImage);

module.exports = galleryRouter;