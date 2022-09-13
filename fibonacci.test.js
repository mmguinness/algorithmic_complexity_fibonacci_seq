const fibonacci = require("./fibonacci");

describe("fibonacci", () => {
  it("takes the number zero and returns an empty array", () => {
    expect(fibonacci(0)).toEqual([]);
  });

  it("takes the number three and returns an array with first three numbers of fibonacci sequence", () => {
    expect(fibonacci(3)).toEqual([0, 1, 1]);
  });
});
