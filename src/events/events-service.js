const EventsService = {
  getAllEvents(knex) {
    return knex.select("*").from("events");
  },

  createEvent(knex, newEvent) {
    return knex
      .insert(newEvent)
      .into("events")
      .returning("*")
      .then(rows => {
        return rows[0];
      });
  },

  getById(knex, id) {
    return knex
      .select("*")
      .from("events")
      .where("eventid", id)
      .first();
  },

  updateEvent(knex, id, updatedEvent) {
    return knex("events")
      .where({ eventid: id })
      .update(updatedEvent);
  },

  deleteEvent(knex, id) {
    return knex
      .from("events")
      .where({ eventid: id })
      .delete();
  }
};

module.exports = EventsService;
