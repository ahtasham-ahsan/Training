const fizzBuzz = require("../exercise1");

describe("FizzBuzz", function () {
  it("Should throw an error if input is not a number", () => {
    expect(() => {
      fizzBuzz.fizzBuzz("R");
    }).toThrow();

    expect(() => {
      fizzBuzz.fizzBuzz("R");
    }).toThrow();

    expect(() => {
      fizzBuzz.fizzBuzz(null);
    }).toThrow();

    expect(() => {
      fizzBuzz.fizzBuzz(undefined);
    }).toThrow();

    expect(() => {
      fizzBuzz.fizzBuzz({});
    }).toThrow();
  });

  it("should return fizzBuzz", () => {
    const result = fizzBuzz.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("should return fizz", () => {
    const result = fizzBuzz.fizzBuzz(18);
    expect(result).toBe("Fizz");
  });

  it("should return Buzz", () => {
    const result = fizzBuzz.fizzBuzz(20);
    expect(result).toBe("Buzz");
  });

  it("should return input", () => {
    const result = fizzBuzz.fizzBuzz(16);
    expect(result).toBe(16);
  });
});
