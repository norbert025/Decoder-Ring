// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6



const substitutionModule = (function () {
  
  
    // error handeling
    function errorHandeling(alphabet){
         if (alphabet === undefined) return false; // Returns false in input undefined
         if (alphabet.length != 26) return false; // Returns false in input length not 26
         for (letter of alphabet){ 
         if(alphabet.indexOf(letter) != alphabet.lastIndexOf(letter)) return false;
          
          } 
      
        }
      
    // substitution function
    function substitution(input, alphabet, encode = true) {
      if (errorHandeling(alphabet) === false) return false; // Returns false in no alphabet
      const alphabetOne = "abcdefghijklmnopqrstuvwxyz "; // unique character as space
      const alphabetTwo = alphabet + " "; // unique character as space
      input = input.toLowerCase(); // makes input letters lowercase
      const code = [];
      if (encode === true){
        for (let i = 0; i < input.length; i++){
          code.push(alphabetTwo[alphabetOne.indexOf(input[i])]);
        }
      } else {
        for (let i = 0; i < input.length; i++){
          code.push(alphabetOne[alphabetTwo.indexOf(input[i])]);
        }
      }
      return code.join("");
    }
    return {
      substitution,
    };
  })();
  
  
  
  
  module.exports = { substitution: substitutionModule.substitution };
  