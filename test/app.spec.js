const app = require("../src/app");

describe("App", () => {
  it("GET /events responds with 200 containing an object containing an array", () => {
    return supertest(app)
      .get("/api/events")
      .expect(200)
      .then(res => expect(res).to.be.an("object"));
  });

  it("POST /events responds with 201 and a JSON object", () => {
    const obj = { title: "test", date: "test", city: "test", state: "test" };
    return supertest(app)
      .post("/api/events")
      .send(obj)
      .expect(201)
      .then(res => {
        expect(res).to.be.an("object");
      });
  });

  it("GET /events/:eventId responds with 200 and an object", () => {
    return supertest(app)
      .get("/api/events/1")
      .expect(200)
      .then(res => {
        expect(res).to.be.an("object");
      });
  });

  it("PATCH /events/:eventId responds with 201 'Event updated'", () => {
    return supertest(app)
      .patch("/api/events/1")
      .send({ title: "test" })
      .expect(201, "Event updated");
  });

  it("DELETE /events/:eventId response with 204 'Event deleted'", () => {
    supertest(app)
      .delete("/api/events/1")
      .expect(204, "Event deleted");
  });
});
