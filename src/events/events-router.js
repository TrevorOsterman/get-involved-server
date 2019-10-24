const express = require("express");
const eventsRouter = express.Router();
const bodyParser = express.json();
const uuid = require("uuid/v4");
const EventsService = require("./events-service.js");

eventsRouter
  .route("/api/events")
  .get((req, res, next) => {
    const knex = req.app.get("db");
    EventsService.getAllEvents(knex).then(events => {
      res.status(200).json(events);
    });
  })
  .post(bodyParser, (req, res, next) => {
    const {
      title,
      description,
      event_date,
      city,
      state,
      organization = false,
      link = false
    } = req.body;

    if (!title || !event_date || !city || !state || !description) {
      return res.status(400).send("Required fields missing");
    }

    const newEvent = {
      title,
      description,
      event_date,
      city,
      state,
      organization,
      link
    };

    EventsService.createEvent(req.app.get("db"), newEvent).then(newEvent => {
      res.status(201).json(newEvent);
    });
  });

eventsRouter
  .route("/api/events/:eventId")
  .all((req, res, next) => {
    EventsService.getById(req.app.get("db"), req.params.eventId)
      .then(ev => {
        if (!ev) {
          return res
            .status(404)
            .json({ error: { message: `Event no existo` } });
        }
        res.ev = ev;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json(res.ev);
  })
  .delete((req, res, next) => {
    EventsService.deleteEvent(req.app.get("db"), req.params.eventId)
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  })
  .patch(bodyParser, (req, res, next) => {
    const { eventId } = req.params;
    const update = req.body;
    console.log(update);
    EventsService.updateEvent(
      req.app.get("db"),
      req.params.eventId,
      update
    ).then(res.status(201).send(`Event updated`));
  });

module.exports = eventsRouter;
