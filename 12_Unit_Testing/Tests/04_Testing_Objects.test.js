const lib = require("../lib");

describe("Get Product", function () {
  it("should return a Product with the give ID", function () {
    const result = lib.getProduct(1);
    //  test fails because objects are in different locations in the memory.
    // expect(result).toBe({id: 1, price: 10});

    // Should have the same properties
    expect(result).toEqual({ id: 1, price: 10 });
    // Should have these properties and can have more that we not testing
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", 1);
  });
});
