const lib = require("../lib");

describe("Greet Function", function () {
  it("Should return the Greeting Message", function () {
    const result = lib.greet("Momin");
    expect(result).toBe("Welcome Momin");
  });

  it("Should return the Greeting Message", function () {
    const result = lib.greet("Timmy");
    expect(result).toMatch(/Timmy/);
    expect(result).toContain("Timmy");
  });
});
