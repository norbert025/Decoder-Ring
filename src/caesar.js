// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
    
    // data set
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    // caesar function
    function caesar(input, shift, encode = true) {
      let Message = ""; // string to be returned
      if (shift && shift <= 25 && shift !== 0 && shift >= -25) { // runs if true
      if (!encode) shift *= -1; 
      for (let letter of input) { // loops over letters of string input
        let lowerCase = letter.toLowerCase(); // makes letters lowercase
        if (alphabet.includes(lowerCase)) {
          let newIndex = alphabet.indexOf(lowerCase) + shift;
          if (newIndex > 25) {
            newIndex -= 26;
          } else if (newIndex < 0) {
            newIndex += 26;
          }
          Message += alphabet[newIndex]; // adds letter to string
        } else {
          Message += lowerCase; // add space
        }
      }
      
      return Message; // returns string
    }
      return false // returns false in above if statement is not true
    }
    
    return {
      caesar,
    };
    
   
    
   
  })();
  
  module.exports = { caesar: caesarModule.caesar };