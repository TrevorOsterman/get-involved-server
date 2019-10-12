const express = require("express");
const eventsRouter = express.Router();
const bodyParser = express.json();
const uuid = require("uuid/v4");

const eventId = uuid();
const events = [
  {
    title: "Super Soup Kitchen",
    date: "2019-10-20",
    city: "Phoenix",
    state: "AZ",
    org: "Helping Hands",
    link: ""
  },
  {
    title: "Planting Trees for the Bees",
    date: "2019-10-31",
    city: "Tempe",
    state: "AZ",
    org: "Save the Bees",
    link: "https://youtu.be/EVCrmXW6-Pk"
  }
];

eventsRouter
  .route("/api/events")
  .get((req, res) => {
    res.status(200).send(events);
  })
  .post(bodyParser, (req, res) => {
    const { title, date, city, state, org = false, link = false } = req.body;

    if (!title || !date || !city || !state) {
      return res.status(400).send("Required fields missing");
    }

    const event = {
      eventId,
      title,
      date,
      city,
      state,
      org,
      link
    };

    events.push(event);

    res.status(201).send("Event added");
  });

eventsRouter
  .route("/api/events/:eventId")
  .get((req, res) => {
    res.send("Not implemented yet");
  })
  .delete((req, res) => {
    const { eventId } = req.params;

    const index = events.findIndex(u => u.eventId === eventId);
    if (index === -1) {
      return res.status(404).send("Event not found");
    }

    events.splice(index, 1);
    res.status(204).end();
  });

module.exports = eventsRouter;
