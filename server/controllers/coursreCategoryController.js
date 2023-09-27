const Category = require("../models/CourseCategory");

class courseCategoryController {
  static post = async (req, res) => {
    try {
      const { categories } = req.body;

      const courseCategory = await new Category({
        categories,
      });
      const result = await courseCategory.save();
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        msg: err,
      });
    }
  };
  static get = async (req, res) => {
    try {
      const result = await Category.find({});
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        msg: err,
      });
    }
  };

  static getOne = async (req, res) => {
    const Id = req.params.id;
    try {
      const result = await Category.findOne({ _id: Id });
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      res.status(404).json({
        status: false,
        msg: "no such ID",
      });
    }
  };

  static patch = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await Category.findByIdAndUpdate(
        Id,
        {
          ...req.body,
        },
        { new: true }
      );
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      res.status(404).json({
        status: false,
        msg: "Check ID again!",
      });
    }
  };
  static delete = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await Category.deleteOne({ _id: Id });
      res.status(200).json({
        status: true,
        msg: "Deleted Successfully",
      });
    } catch (err) {
      res.status(400).json({
        status: false,
        msg: "Id does not exist!",
      });
    }
  };
}

module.exports = courseCategoryController;
