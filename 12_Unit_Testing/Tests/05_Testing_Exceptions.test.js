const lib = require("../lib");

describe("Register User", () => {
  it("should throw an error if the user is not registered", () => {
    // const result = lib.registerUser(null);
    // expect(result).toThrow();

    expect(() => {
      lib.registerUser(null);
    }).toThrow();
  });

  it("should throw an error if the user is null, false or None", () => {
    const args = [null, undefined, NaN, false, 0, ""];
    args.forEach((element) => {
      expect(() => {
        lib.registerUser(element);
      }).toThrow();
    });
  });

  it("should return a user object", () => {
    const result = lib.registerUser("falcon");
    expect(result).toMatchObject({
      username: "falcon",
    });

    expect(result.id).toBeGreaterThan(0);
  });
});
