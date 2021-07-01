// Write your tests here!
const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;
const polybius = polybiusModule.polybius;


describe("polybius encoding Check", () => {
  it("Should translate both i & j to 42 when encoding", () => {
    expect(polybius('ij')).to.equal('4242'); // no error
  });
  it("Should ignore capital letters", () => {
    expect(polybius('I')).to.equal('42'); // no error
  });
  it("Should maintain spaces when encoding", () => {
    expect(polybius('ij')).to.equal('4242'); // no error
  });
});
describe("polybius decoding Check", () => {
  it("Should maintain spaces when decoding", () => {
    expect(polybius('11 11', false)).to.equal('a a'); // no error
  });
  it("Should translate 42 to (i/j) when decoding", () => {
    expect(polybius('42', false)).to.equal('(i/j)'); // no error
  });
});