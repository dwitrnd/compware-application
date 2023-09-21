const { validationResult } = require("express-validator");
const blog = require("../models/Blog");
const fs = require("fs");
class blogController {
  static post = async (req, res) => {
    try {
      const { title, date, author, article } = req.body;
      const file = req.files.logo;
      console.log("this", file);
      const timestamp = Date.now();
      const fileName = `photo_${timestamp}.jpeg`;

      file.mv(`./storage/${fileName}`, (error) => {
        if (error) {
          return res.status(500).send(error);
        }
        console.log("File Uploaded");
      });

      const Blog = await new blog({
        title,
        date,
        author,
        logo: fileName,
        article,
      });

      const result = await Blog.save();
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        msg: error,
      });
    }
  };

  static get = async (req, res) => {
    try {
      const result = await blog.find({});
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

  static patch = async (req, res) => {
    const { title, date, author, article } = req.body;

    console.log("blog patch req");
    const blogId = req.params.id;
    const savedBlog = await blog.findById(blogId);
    try {
      if (req.files) {
        const file = req.files.logo;
        const timestamp = Date.now();
        const fileName = `photo_${timestamp}.jpeg`;

        file.mv(`./storage/${fileName}`, (error) => {
          if (error) {
            return res.status(500).send(error);
          }
          console.log("Upload Successful!");
        });

        const oldFilePath = `./storage/${savedBlog.logo}`;
        fs.unlink(oldFilePath, (err) => {
          if (err) {
            return res.status(500).send(err);
          }
          console.log("Previous Image Deleted!");
        });
        const result = await blog.findByIdAndUpdate(
          blogId,
          {
            title,
            date,
            author,
            logo: fileName,
            article,
          },
          { new: true }
        );
        if (!result) {
          return res.status(404).json({
            status: false,
            msg: "Check Id again",
          });
        }
        res.status(200).json({
          status: true,
          msg: result,
        });
      } else {
        const result = await blog.findByIdAndUpdate(
          blogId,
          {
            title,
            date,
            author,
            article,
          },
          { new: true }
        );
        if (!result) {
          return res.status(404).json({
            status: false,
            msg: "Check Id again",
          });
        }
        res.status(200).json({
          status: true,
          msg: result,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: false,
        msg: err,
      });
    }
  };

  static getOne = async (req, res) => {
    const Id = req.params.id;
    try {
      const data = await blog.findOne({ _id: Id });
      if (!data) {
        throw new Error("no data found");
      }
      res.status(200).json({
        status: true,
        msg: data,
      });
    } catch (err) {
      res.status(404).json({
        status: false,
        msg: err,
      });
    }
  };
  static delete = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await blog.deleteOne({ _id: Id });
      console.log(result);
      res.status(200).json({
        status: true,
        msg: "Deletion Successful!",
      });
    } catch (err) {
      res.status(400).json({
        status: false,
        msg: "Id does not exist!",
      });
    }
  };
}
module.exports = blogController;
