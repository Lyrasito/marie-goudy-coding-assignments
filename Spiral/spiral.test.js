const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const createSpiral = require("./spiral");

describe("createSpiral", () => {
  it("should create a 2-dimensional array the length of the input", () => {
    const num = 3;
    const result = createSpiral(num);
    assert.typeOf(result, "array");
    assert.typeOf(result[0], "array");
    expect(result.length).to.equal(3);
    expect(result[0].length).to.equal(3);
  });
  it("should return an empty array if the input is < 1", () => {
    const num = 0;
    const num1 = -1;
    const num2 = 0.5;
    const result = createSpiral(num);
    const result1 = createSpiral(num1);
    const result2 = createSpiral(num2);
    expect(result).to.eql([]);
    expect(result1).to.eql([]);
    expect(result2).to.eql([]);
  });
  it("should create a spiral array the length and height of the input", () => {
    const num = 4;
    const num1 = 5;
    const result = createSpiral(num);
    const result1 = createSpiral(num1);
    expect(result).to.eql([
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ]);
    expect(result1).to.eql([
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ]);
  });
});
