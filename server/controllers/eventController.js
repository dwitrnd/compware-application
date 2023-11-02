const Event = require("../models/Event");
const mongoose = require("mongoose");

const getEvents = async (req, res) => {
  const result = await Event.find({}).sort();
  res.status(200).json(result);
};
const getEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such event found" });
  }
  const event = await Event.findById(id);
  if (!event) {
    return res.status(404).json({ error: "No such event" });
  }
  res.status(200).json(event);
};

const postEvent = async (req, res) => {
  const {
    episodeNumber,
    eventType,
    eventDetail,
    eventDescription,
    panelist,
    facilitator,
    contributors,
    faq,
  } = req.body;
  try {
    const event = await Event.create({
      episodeNumber,
      eventType,
      eventDetail,
      eventDescription,
      panelist,
      facilitator,
      contributors,
      faq,
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const deletedEvent = await Event.findByIdAndRemove(eventId);

    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const updatedEventData = req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      updatedEventData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
};

module.exports = { getEvents, postEvent, deleteEvent, updateEvent, getEvent };
