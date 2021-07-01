const caesarModule = require("../src/caesar");
const expect = require("chai").expect;
const caesar = caesarModule.caesar;

describe("caesar error handling", () => {
  it("Should return false if the shift amount is 0", () => { expect(caesar('h',0)).to.equal(false); // no error
  });
   it("should return false if the shift amount is above 25", () => { expect(caesar('h',26)).to.equal(false); // no error
  });
  it("should return false if the shift amount is less than -25", () => { expect(caesar('h',-26)).to.equal(false); // no error
  });
  it("It ignores capital letters", () => { expect(caesar('A',3)).to.equal('d'); // no error
  });
});

describe("caesar encoding errors ", () => {
  it("should appropriately handle letters at the end of the alphabet", () => { expect(caesar('z',3)).to.equal('c'); // no error
  });
   it("should leaves spaces and other symbols as is", () => { expect(caesar('z z',3)).to.equal('c c'); // no error
  });
});

describe("caesar decoding errors ", () => {
  it("should leaves spaces and other symbols as is", () => { expect(caesar('z z',3)).to.equal('c c'); // no error
  });
 });