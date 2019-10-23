const app = require("./app");
const { PORT, DB_URL } = require("./config");
const knex = require("knex");
const EventsService = require("./events/events-service.js");

const db = knex({
  client: "pg",
  connection: DB_URL
});

app.set("db", db);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
