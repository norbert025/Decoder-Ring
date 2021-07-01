const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;
const substitution = substitutionModule.substitution;

describe("substitution encoding Check", () => {
  it("It returns false if the given alphabet isn't exactly 26 characters long.", () => { expect(substitution('h',"abcdefghijklmnopqrstuvwxyz ")).to.equal(false); // no error
  });
  it("It correctly translates the given phrase, based on the alphabet given to the function.", () => { expect(substitution('hi',"abcdefghijklmnopqrstuvwxyz")).to.equal('hi'); // no error
  });
  it("It returns false if there are any duplicate characters in the given alphabet.", () => { expect(substitution('hi',"abcdefghhjklmnopqrstuvwxyz")).to.equal(false); // no error
  });
  it("It maintains spaces in the message, before and after encoding or decoding.", () => { expect(substitution('hi hi',"abcdefghijklmnopqrstuvwxyz")).to.equal('hi hi'); // no error
  });
  it("It ignores capital letters.", () => { expect(substitution('Hi',"abcdefghijklmnopqrstuvwxyz")).to.equal('hi'); // no error
  });
  
});

describe("substitution decoding Check", () => {
  it("It maintains spaces in the message, before and after encoding or decoding.", () => { expect(substitution('h h',"abcdefghijklmnopqrstuvwxyz", false)).to.equal('h h'); // no error
  });
 });