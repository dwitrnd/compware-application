//const express = require("express");
const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  courseName: {
    type: String,
    unique: true,
  },
  slugTitle: {
    type: String,
  },
  courseCategory: {
    type: String,
  },
  courseIntro: {
    type: String,
  },
  aboutCourse: {
    type: String,
  },
  courseLogo: {
    type: String,
  },
  imageName: {
    type: String,
  },
  imageAltText: {
    type: String,
  },
  coursePdf: {
    type: String,
  },
  duration: {
    type: String,
  },
  schedule: {
    type: String,
  },
  startDate: {
    type: String,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
