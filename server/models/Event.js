const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  episodeNumber: {
    type: String,
  },
  eventType: {
    type: String,
  },
  eventDetail: [
    {
      eventDate: Date,
      eventTime: String,
      eventLocation: String,
    },
  ],
  eventDescription: {
    type: String,
  },
  panelist: [
    {
      panelistName: String,
      panelistImageName: String,
      panelistInfo: String,
    },
  ],
  facilitator: [
    {
      facilitatorName: String,
      role: String,
      facilitatorImage: String,
      facilitatorInfo: String,
    },
  ],
  contributors: [
    {
      contributorTitle: String,
      contributorImages: [String],
    },
  ],
  faq: [
    {
      question: String,
      answer: String,
    },
  ],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
