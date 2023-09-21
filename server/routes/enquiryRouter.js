const enquiryController = require("../controllers/enquiryController");
const enquiryRouter = require("express").Router();

enquiryRouter.get("/", enquiryController.get);
enquiryRouter.post("/", enquiryController.post);
enquiryRouter.patch("/:id", enquiryController.patch);
enquiryRouter.patch("/status/:id", enquiryController.patchState);
enquiryRouter.delete("/:id", enquiryController.delete);
enquiryRouter.get("/:id", enquiryController.getOne);

module.exports = enquiryRouter;
