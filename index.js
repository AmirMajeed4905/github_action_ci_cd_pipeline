const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("Hello DevOps CI World 🚀"));

describe("GET /", () => {
  it("responds with Hello DevOps CI World 🚀", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello DevOps CI World 🚀");
  });
});