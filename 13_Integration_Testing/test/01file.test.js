const request = require("supertest");
let server;

describe("apis testing", () => {
  beforeEach(() => {
    server = require("../01_file");
  });
  afterEach(() => {
    server.removeAllListeners();
  });
  describe("GET Api", () => {
    it("should return all the users", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
  });
});
