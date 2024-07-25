const { encrypt, decrypt } = require("../build/index.js");

describe("main", () => {
    const errorMsg = "Key must be a positive integer greater than 0";

    test("should throw an error if key is negative", () =>
        expect(() => {
            encrypt(-1, "abc");
        }).toThrow(errorMsg));

    test("should throw an error if key is not given", () =>
        expect(() => {
            encrypt("abc");
        }).toThrow(errorMsg));

    test("should throw an error if key is negative", () =>
        expect(() => {
            decrypt(-1, "abc");
        }).toThrow(errorMsg));

    test("should throw an error if key is not given", () =>
        expect(() => {
            decrypt("abc");
        }).toThrow(errorMsg));
});
