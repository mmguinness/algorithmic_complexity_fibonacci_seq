const fibonacci = require("./fibonacci");

describe("fibonacci", () => {
  it("takes the number zero and returns an empty array", () => {
    expect(fibonacci(0)).toEqual([]);
  });

  it("takes the number one and returns an array with first number of fibonacci sequence", () => {
    expect(fibonacci(1)).toEqual([0]);
  });

  it("takes the number two and returns an array with first two numbers of fibonacci sequence", () => {
    expect(fibonacci(2)).toEqual([0, 1]);
  });

  it("takes the number three and returns an array with first three numbers of fibonacci sequence", () => {
    expect(fibonacci(3)).toEqual([0, 1, 1]);
  });

  it("takes the number four and returns an array with first four numbers of fibonacci sequence", () => {
    expect(fibonacci(4)).toEqual([0, 1, 1, 2]);
  });
});
