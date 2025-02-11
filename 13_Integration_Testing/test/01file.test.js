const request = require("supertest");
let server;
const { test_Model } = require("../01_file");

describe("apis testing", () => {
  beforeEach(() => {
    server = require("../01_file");
  });
  afterEach(() => {
    server.removeAllListeners();
  });
  describe("GET Api", () => {
    it("should return all the users", async () => {
      await test_Model.collection.insertMany([
        { name: "John" },
        { name: "Doe" },
      ]);
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some((n) => n.name === "John")).toBeTruthy();
      expect(res.body.some((n) => n.name === "Doe")).toBeTruthy();
    });
  });
});
