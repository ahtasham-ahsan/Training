const lib = require("../lib");

describe("Get Currencies", () => {
  it("should return supported currencies", () => {
    const currency = lib.getCurrencies();

    // Too General Outputs
    expect(currency).toBeDefined();
    expect(currency).not.toBeNull();

    // Too Specific Outputs
    expect(currency[0]).toBe("USD");
    expect(currency[1]).toBe("AUD");
    expect(currency[2]).toBe("EUR");
    expect(currency.length).toBe(3);

    // Proper Ways
    expect(currency).toContain("USD");
    expect(currency).toContain("AUD");
    expect(currency).toContain("EUR");

    // Ideal Way
    expect(currency).toEqual(expect.arrayContaining(["EUR", "AUD", "USD"]));
  });
});
