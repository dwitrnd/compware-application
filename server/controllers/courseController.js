const Course = require("../models/Course");

class courseController {
  static post = async (req, res) => {
    try {
      const {
        courseName,
        courseDuration,
        schedule,
        startDate,
        slugTitle,
        courseCategory,
        courseIntro,
        aboutCourse,
        imageName,
        imageAltText,
      } = req.body;

      console.log("=====debug====");

      console.log(req.body);

      const file1 = req.files.courseLogo;
      console.log(file1);
      const file2 = req.files.coursePdf;

      //courseLogo is object => Name.md5 + concatenate with Date.now()
      const timestamp1 = Date.now();

      const courseLogo = file1.md5 + timestamp1;
      file1.mv(`./storage/${courseLogo}.png`, (error) => {
        if (error) {
          return res.status(500).send(error);
        }
        console.log("Upload Successful!");
      });

      const timestamp2 = Date.now();
      const coursePdfName = file2.md5 + timestamp2;
      file2.mv(`./storage/${coursePdfName}.pdf`, (error) => {
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
        duration: courseDuration,
        aboutCourse,
        courseLogo: `${courseLogo}.png`,
        imageName,
        imageAltText,
        coursePdf: `${coursePdfName}.pdf`,
        schedule,
        startDate,
      });
      const result = await course.save();
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
    const {
      courseName,
      courseDuration,
      schedule,
      startDate,
      slugTitle,
      courseCategory,
      courseIntro,
      aboutCourse,
      imageName,
      imageAltText,
    } = req.body;

    const courseId = req.params.id;
    let courseLogoName;
    if (courseLogo) {
      const file1 = req.files.courseLogo;
      const timestamp = Date.now();
      const fileName1 = file1.md5 + timestamp;

      file1.mv(`./storage/${fileName1}.jpg`),
        (error) => {
          if (error) {
            return res.status(500).send(error);
          }
          console.log("File Updated!");
        };
      courseLogoName = fileName1;
    }
    let coursePdfName;
    if (coursePdf) {
      const file2 = req.files.coursePdf;
      const timestamp = Date.now();
      const fileName2 = file2.md5 + timestamp;

      file2.mv(`./storage/${fileName2}.pdf`),
        (error) => {
          if (error) {
            return res.status(500).send(error);
          }
          console.log("File Updated!");
        };
      coursePdfName = fileName2;
    }
    try {
      const result = await Course.findByIdAndUpdate(
        courseId,
        {
          courseName,
          slugTitle,
          courseCategory,
          courseIntro,
          duration: courseDuration,
          aboutCourse,
          courseLogo: `${courseLogoName}.png`,
          imageName,
          imageAltText,
          coursePdf: `${coursePdfName}.pdf`,
          schedule,
          startDate,
        },
        { new: true }
      );
      if (!result) {
        throw new Error("Not Updated");
      }
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        msg: "Not updated!",
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
