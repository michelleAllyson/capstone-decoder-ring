// Write your tests here!
const expect  = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius", () => {
    it("happy path - should encode a string using a variety of ciphers, 'endcode' is set to 'true' by default ", () => { 
        const input = "thinkful";

        const expected = "4432423352125413";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });

    it("edge case - should decode a string using a variety of ciphers, decoding occurs when 'endcode' value is 'false'", () => { 
        const input = "4432423352125413";

        const expected = "th(i/j)nkful";
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);
    });
})