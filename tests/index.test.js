const cipher = require("../build/index.js");

describe("main", () => {
    const errorMsg = "Key must be a positive integer greater than 0";

    test("should throw an error if key is negative", () =>
        expect(() => {
            cipher(-1);
        }).toThrow(errorMsg));

    test("should throw an error if key is not given", () =>
        expect(() => {
            cipher();
        }).toThrow(errorMsg));
});
