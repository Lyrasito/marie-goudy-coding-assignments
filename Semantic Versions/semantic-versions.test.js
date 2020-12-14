const chai = require("chai");
const nextVersion = require("./semantic-versions");

const expect = chai.expect;

describe("nextVersion", () => {
  it("should increment the last number of the string", () => {
    const string = "1.2.3";
    const string1 = "1";
    const string2 = "1.2.3.4.5.6.7.8";

    const result = nextVersion(string);
    const result1 = nextVersion(string1);
    const result2 = nextVersion(string2);

    expect(result).to.equal("1.2.4");
    expect(result1).to.equal("2");
    expect(result2).to.equal("1.2.3.4.5.6.7.9");
  });
  it("should change 9 to 0 and increment the previous number if the last number is 9", () => {
    const string = "0.9.9";
    const result = nextVersion(string);
    expect(result).to.equal("1.0.0");
  });
  it("should increment the first number of the string > 9 if all other numbers are 9", () => {
    const string = "9.9";
    const result = nextVersion(string);
    expect(result).to.equal("10.0");
  });
});
