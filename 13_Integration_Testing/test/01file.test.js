const request = require("supertest");
let server;
const { test_Model } = require("../01_file");

describe("apis testing", () => {
  beforeEach(() => {
    server = require("../01_file");
  });
  afterEach(async () => {
    server.removeAllListeners();
    await test_Model.remove({});
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

  describe("GET with parameter", () => {
    it("should return if valid id is sent", async () => {
      const user = new test_Model({ name: "John" });
      await user.save();

      const resp = await request(server).get("/user/" + user.id);
      expect(resp.status).toBe(200);
      expect(resp.body).toHaveProperty("name", "John");
    });
    it("should return 404 if invalid id is passed", async () => {
      const resp = await request(server).get("/user/1");
      expect(resp.status).toBe(404);
    });
  });

  describe("Post", () => {
    it("should return 401 if users is not logged in ", async()=>{
      const res = await request(server).post("/user").send({name: "John"});
      expect(res.status).toBe(401);
    });

    it("should return 400 if users is less than 3 characters ", async()=>{
      const res = await request(server).post("/user").send({name: "John"});
      expect(res.status).toBe(401);
    });

  })
});
