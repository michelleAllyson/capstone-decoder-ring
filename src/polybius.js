// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const polyArray = {
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

const polybiusModule = (function () {
  

  function polybius(input, encode = true) {
    const polyChar = Object.values(polyArray);
    const polyId = Object.keys(polyArray);
    if (encode) {
      const encodedMessage = input
        .toLowerCase()
        .split("")
        .map((char) => {
          let output = "";
          if (char === " ") {
            output += char;
          } else if (char === "i" || char === "j") {
            output += "42";
          } else {
            if (polyChar.includes(char)) {
              const inputIndex = polyChar.indexOf(char);
              output += polyId[inputIndex];
            }
          }
          return output;
        });
      return encodedMessage.join("");
    }
   
    else {
     
      const checkForEven = input.split(" ").join("");
      if (checkForEven.length % 2 !== 0) {
        return false;
      } else {
        
        let output = "";
        let pairArray = [];
        for (let i = 0; i < input.length; i += 2) {
         
          if (input.charAt(i) === " " || input.charAt(i + 1) === " ") {
            i -= 1;
            pairArray.push(" ");
          } else {
            let pair = input.slice(i, i + 2);
            pairArray.push(pair);
          }
        }

        
        const match = pairArray.map((char) => {
          if (char === " ") {
            output = char;
          } else {
            if (polyId.includes(char)) {
              let index = polyId.indexOf(char);
              output = polyChar[index];
            }
          }
          return output;
        });
        
        return match.join("");
      }
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };