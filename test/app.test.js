const request = require("supertest");
const app = require("../index"); // server import

describe("GET /", () => {
  it("responds with Hello DevOps CI World 🚀", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello DevOps CI World 🚀");
  });
});
describe("post /", () => {
  it("responds with Hello DevOps CI World 🚀", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello DevOps CI World 🚀");
  });
});
