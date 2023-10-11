// Write your tests here!
const expect  = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {
    it("happy path - should encode or decode a string using a variety of ciphers", () => { 
        const input = "thinkful";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"

        const expected = "jrufscpw";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it("edge case - spaces should be maintained throughout", () => {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"

        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

    it("edge case - ENCODE : the alphabet parameter should be a string of exactly 26 characters that must be unique and can include special characters", () => {
        const input = "message";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"

        const expected = "y&ii$r&";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

    it("edge case - DECODE : the alphabet parameter should be a string of exactly 26 characters that must be unique and can include special characters", () => {
        const input = "y&ii$r&";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"

        const expected = "message";
        const actual = substitution(input, alphabet, false);
        expect(actual).to.equal(expected);
    });
});