const express = require("express");
const {
  getEvents,
  postEvent,
  deleteEvent,
  updateEvent,
  getEvent,
} = require("../controllers/eventController");
