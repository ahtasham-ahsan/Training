const lib = require("../lib");

describe("Apply Discount", () => {




  it("should apply a Discount", () => {
    const order = { customerID: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });






});
