const { validationResult } = require("express-validator");
const team = require("../models/Team");
const fs = require("fs");
class teamController {
  static post = async (req, res) => {
    try {
      const { Name, Email, Post, Role, Description, ImageName, ImageAltText } =
        req.body;
      const file = req.files.Image;

      const timestamp = Date.now();
      const filename = `photo_${timestamp}.jpeg`;

      file.mv(`./storage/${filename}`, (error) => {
        if (error) {
          return res.status(500).send(error);
        }
        console.log("File upload successful!");
      });

      const Team = await new team({
        Name,
        Email,
        Post,
        Role,
        Description,
        ImageAltText,
        ImageName,
        Image: filename,
      });
      const result = await Team.save();
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
      const result = await team.find({});
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

  static patch = async (req, res) => {
    const {
      Name,
      Email,
      Post,
      Description,
      ImageName,
      Image,
      ImageAltText,
      Role,
    } = req.body;

    const teamId = req.params.id;
    const savedTeam = await team.findById(teamId);
    try {
      if (req.files) {
        const file = req.files.Image;
        const timestamp = Date.now();
        const fileName = `photo_${timestamp}.jpeg`;

        file.mv(`./storage/${fileName}`, (error) => {
          if (error) {
            return res.status(500).send(error);
          }
          console.log("Upload Successful!");
        });

        const oldFilePath = `./storage/${savedTeam.Image}`;
        fs.unlink(oldFilePath, (err) => {
          if (err) {
            return res.status(500).send(err);
          }
          console.log("Previous Image Deleted!");
        });
        const result = await team.findByIdAndUpdate(
          teamId,
          {
            Image: fileName,
            Name,
            Email,
            Post,
            Description,
            ImageName,
            ImageAltText,
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
        const result = await team.findByIdAndUpdate(
          teamId,
          {
            Name,
            Email,
            Post,
            Description,
            ImageName,
            ImageAltText,
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
    try {
      const Id = req.params.id;
      const result = await team.findOne({ _id: Id });
      if (!result) {
        throw Error;
      }
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      res.status(404).json({
        status: false,
        msg: "Invalid ID",
      });
    }
  };

  static delete = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await team.deleteOne({ _id: Id });
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

module.exports = teamController;
