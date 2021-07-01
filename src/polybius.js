const polybiusModule = (function () {
    // data set
    const AlphabetOne = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "(i/j)",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };
    
    // data set
    const polybiusTwo = [
      { index: 11, letter: "a" },
      { index: 21, letter: "b" },
      { index: 31, letter: "c" },
      { index: 41, letter: "d" },
      { index: 51, letter: "e" },
      { index: 12, letter: "f" },
      { index: 22, letter: "g" },
      { index: 32, letter: "h" },
      { index: 42, letter: "(i/j)"},
      { index: 52, letter: "k" },
      { index: 13, letter: "l" },
      { index: 23, letter: "m" },
      { index: 33, letter: "n" },
      { index: 43, letter: "o" },
      { index: 53, letter: "p" },
      { index: 14, letter: "q" },
      { index: 24, letter: "r" },
      { index: 34, letter: "s" },
      { index: 44, letter: "t" },
      { index: 54, letter: "u" },
      { index: 15, letter: "v" },
      { index: 25, letter: "w" },
      { index: 35, letter: "x" },
      { index: 45, letter: "y" },
      { index: 55, letter: "z" },
    ];
  
  
    // helper encoder function
    function _encoder(input) {
      let message = ""; // string to br returned
      for (let char of input) { // looks over input string letters
        let lowerCase = char.toLowerCase(); // makes letters lowercase
        if (lowerCase === "i" || lowerCase === "j") { // conditinal to handle i or j
          let letterIndex = '8' 
          const x = (letterIndex % 5) + 1; // formula
          const y = Math.floor(letterIndex / 5) + 1; //formula
          message += `${x}${y}`;
        } else if (polybiusTwo.some((element) => element.letter === lowerCase)) {
          let letterIndex = polybiusTwo.findIndex(
            (element) => element.letter === lowerCase
          );
          const x = (letterIndex % 5) + 1;
          const y = Math.floor(letterIndex / 5) + 1;
          message += `${x}${y}`;
        } else {
          message += lowerCase; // adds space
        }
      }
      return message; // string to be returned 
    }
  
    // helper decoder function
    function _decoder(input) {
      let message = ""; // string to br returned
      for (let i = 0; i < input.length; i += 2) {
         if (input.replace(/\s/g, "").length % 2 !== 0) return false;
        if (input[i] === " ") {
          message += input[i];
          i = i - 1;
        } else {
          const x = input[i];
          const y = input[i + 1];
          const letterIndex = `${x}${y}`;
          message += AlphabetOne[letterIndex];
        }
      }
      return message;
    }
  
   // polybious function
    function polybius(input, encode = true) {
      if (!encode) {
        if (input.replace(/\s/g, "").length % 2 !== 0) return false
        return _decoder(input);
      } else {
        return _encoder(input);
      }
    }
    return {
      polybius,
    };
  })();
  module.exports = { polybius: polybiusModule.polybius };