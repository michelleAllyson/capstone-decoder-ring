// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
    
    if (!encode) shift *= -1;
    
    let output = input.toLowerCase();
    let finalOutput = "";
    
    for (let text = 0; text < output.length; text++) {
      let message = output[text];

      if (message.match(/[a-z]/)) {
        let code = output.charCodeAt(text) + shift;

        if (code > 122) {
          code = code - 26;
        }
        if (code < 97) {
          code = code + 26;
        }
        let newMessage = String.fromCharCode(code);
        finalOutput += newMessage;
      } else {
        finalOutput += message;
      }
    }
    console.log(finalOutput);
    return finalOutput; //return message
  }
   
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
