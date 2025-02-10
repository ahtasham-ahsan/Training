const lib = require("../lib");

test("absolute function for Pos Values", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1); // Matcher Functions
});

test("absolute function for Neg Values", () => {
  const result = lib.absolute(-1);
  expect(result).toBe(1); // Matcher Functions
});

test("absolute function for Zero", () => {
  const result = lib.absolute(0);
  expect(result).toBe(0); // Matcher Functions
});

// Grouping Related Tests of a Function.
// Grouping tests of Absolete Function

describe("Absolute Functions", () => {
  it("absolute function for Pos Values", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1); // Matcher Functions
  });

  it("absolute function for Neg Values", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1); // Matcher Functions
  });

  it("absolute function for Zero", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0); // Matcher Functions
  });
});
