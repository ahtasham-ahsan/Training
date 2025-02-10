const lib = require("../lib");
const db = require("../db");
const mail = require("../mail");

describe("Apply Discount", () => {
  it("should apply a Discount", () => {
    const mockFunction = jest.fn();
    // mockFunction.mockReturnValue(1); // returns 1
    // mockFunction.mockResolvedValue(1); // returns a promise

    db.getCustomerSync = jest
      .fn()
      .mockReturnValue({ email: "test@example.com" });
    mail.send = jest.fn();
    lib.notifyCustomer({ customerId: 1 });
    expect(mail.send).toHaveBeenCalled();
    // check the arguments of the function.
    expect(mail.send.mock.calls[0][0]).toBe("test@example.com");
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);
  });
});
