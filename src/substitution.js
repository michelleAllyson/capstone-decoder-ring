// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const output = [];
    function substitution(input, alphabet, encode = true) {
  
      const checkForDuplicateCharacters = new Set(alphabet);
      if (alphabet === undefined || alphabet.length < 26 || [...checkForDuplicateCharacters].length < 26) return false;
          
      alphabet.split("");
      if (encode)
      {
        for (let i = 0; i < 26; i++)
        {
          output[standardAlphabet[i]] = alphabet[i];
          
        }
      } else
      {
        for (let i = 0; i < 26; i++)
        {
          output[alphabet[i]] = standardAlphabet[i];
        }
      }
      let finalOutput = input.toLowerCase().split("").map((character) => {
        if (character === " ") return " ";
        return output[character]
      })
      return finalOutput.join("");
    }
  
    return {
      substitution,
    };
  })();
  
  module.exports = { substitution: substitutionModule.substitution };