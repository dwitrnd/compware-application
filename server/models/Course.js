//const express = require("express");
const mongoose = require("mongoose");
const courseCategory = require("../models/CourseCategory");

const courseSchema = mongoose.Schema({
  courseName: {
    type: String,
  },
  slugTitle: {
    type: String,
  },
  courseCategory: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: courseCategory,
      required: true,
    },
  ],
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
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  fee: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
