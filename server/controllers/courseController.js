const Course = require("../models/Course");
const fs = require("fs");
class courseController {
  static post = async (req, res) => {
    try {
      const {
        courseName,
        duration,
        schedule,
        startDate,
        slugTitle,
        courseCategory,
        courseIntro,
        aboutCourse,
        imageName,
        imageAltText,
        fee,
      } = req.body;

      const file1 = req.files.courseLogo;
      console.log(file1);
      const file2 = req.files.coursePdf;
      console.log(file2);

      //courseLogo is object => Name.md5 + concatenate with Date.now()
      const timestamp = Date.now();

      const courseLogo = file1.md5 + timestamp;
      file1.mv(`./storage/${courseLogo}.png`, (error) => {
        if (error) {
          return res.status(500).send(error);
        }
        console.log("Upload Successful!");
      });

      const coursePdf = file2.md5 + timestamp;
      file2.mv(`./storage/${coursePdf}`, (error) => {
        if (error) {
          return res.status(500).send(error);
        }
        console.log("Upload Successful!");
      });
      const course = await new Course({
        courseName,
        slugTitle,
        courseCategory,
        courseIntro,
        aboutCourse,
        courseLogo,
        imageName,
        imageAltText,
        coursePdf,
        duration,
        schedule,
        startDate,
        fee,
      });

      const result = await course.save();
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        status: false,
        msg: error,
      });
    }
  };
  static findByName = async (req, res) => {
    try {
      const { courseName } = req.body;
      console.log("courseName", courseName);
      const result = await Course.findOne({
        courseName: courseName.toUpperCase(),
      });
      console.log("result", result);
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
      const result = await Course.find({});
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
    const courseId = req.params.id;
    const savedCourse = await Course.findById(courseId);
    if (req.files) {
      if (req.files.courseLogo) {
        const file1 = req.files.courseLogo;
        const timestamp = Date.now();
        const fileName1 = file1.md5 + timestamp;

        file1.mv(`./storage/${fileName1}.png`, (error) => {
          if (error) {
            return res.status(500).send(error);
          }
          console.log("Upload Successful!");
        });

        const oldFilePath = `./storage/${savedCourse.courseLogo}.png`;
        fs.unlink(oldFilePath, (err) => {
          if (err) {
            return res.status(500).send(err);
          }
          console.log("Previous Image Deleted!");
        });

        savedCourse.courseLogo = fileName1;
        try {
          await savedCourse.save();
        } catch (error) {
          return res.status(404).json({
            status: false,
            msg: "Check Id again",
          });
        }
      }
      if (req.files.coursePdf) {
        const file2 = req.files.coursePdf;
        console.log(file2);
        const timestamp = Date.now();
        const fileName2 = file2.md5 + timestamp;

        file2.mv(`./storage/${fileName2}`),
          (error) => {
            if (error) {
              return res.status(500).send(error);
            }
            console.log("File Updated!");
          };

        const oldFilePath2 = `./storage/${savedCourse.coursePdf}`;
        fs.unlink(oldFilePath2, (err) => {
          if (err) {
            return res.status(500).send(err);
          }
          console.log("Previous Image Deleted!");
        });

        savedCourse.coursePdf = fileName2;
        try {
          await savedCourse.save();
        } catch (error) {
          return res.status(404).json({
            status: false,
            msg: "Check Id again",
          });
        }
      }
    }
    try {
      const result = await Course.findByIdAndUpdate(
        courseId,
        {
          ...req.body,
        },
        { new: true }
      );
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        msg: "Check Id again",
      });
    }
  };
  static getOne = async (req, res) => {
    const Id = req.params.id;
    try {
      const result = await Course.findOne({ _id: Id });
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
  static delete = async (req, res) => {
    try {
      const Id = req.params.id;
      const result = await Course.deleteOne({ _id: Id });
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

module.exports = courseController;
