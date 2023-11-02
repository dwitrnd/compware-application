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
      panelistImgAltText: String,
      panelistInfo: String,
    },
  ],
  facilitator: [
    {
      facilitatorName: String,
      role: String,
      facilitatorImage: String,
      facilitatorInfo: String,
      facilitatorImgAltText: String,
    },
  ],
  contributors: [
    {
      contributorTitle: String,
      contributorImages: [String],
      contributorImgAltText: String,
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
