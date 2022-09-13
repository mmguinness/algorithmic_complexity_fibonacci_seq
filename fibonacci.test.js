const fibonacci = require("./fibonacci");

describe("fibonacci", () => {
  it("takes the number zero and returns an empty array", () => {
    expect(fibonacci(0)).toEqual([]);
  });
});
