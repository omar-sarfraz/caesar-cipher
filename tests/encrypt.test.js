const { encrypt } = require("../build/index.js");

describe("encrypt: smallkey", () => {
    const smallKey = 5;

    test("should convert abc to fgh", () => expect(encrypt(smallKey, "abc")).toBe("fgh"));
    test("should convert xyz to cde", () => expect(encrypt(smallKey, "xyz")).toBe("cde"));
    test("should convert 1037 to 6582", () => expect(encrypt(smallKey, "1037")).toBe("6582"));
    test("should convert omar.sarfraz@arbisoft.com to trfw.xfwkwfe@fwgnxtky.htr", () =>
        expect(encrypt(smallKey, "omar.sarfraz@arbisoft.com")).toBe("trfw.xfwkwfe@fwgnxtky.htr"));
    test("should convert +92123456789 to +47678901234", () =>
        expect(encrypt(smallKey, "+92123456789")).toBe("+47678901234"));
    test("should convert '' to ''", () => expect(encrypt(smallKey, "")).toBe(""));
    test("should convert ABC to FGH", () => expect(encrypt(smallKey, "ABC")).toBe("FGH"));
    test("should convert XYZ to CDE", () => expect(encrypt(smallKey, "XYZ")).toBe("CDE"));
});

describe("encrypt: largekey", () => {
    const largeKey = 31;

    test("should convert abc to fgh", () => expect(encrypt(largeKey, "abc")).toBe("fgh"));
    test("should convert xyz to cde", () => expect(encrypt(largeKey, "xyz")).toBe("cde"));
    test("should convert 1037 to 2148", () => expect(encrypt(largeKey, "1037")).toBe("2148"));
    test("should convert omar.sarfraz@arbisoft.com to trfw.xfwkwfe@fwgnxtky.htr", () =>
        expect(encrypt(largeKey, "omar.sarfraz@arbisoft.com")).toBe("trfw.xfwkwfe@fwgnxtky.htr"));
    test("should convert +92123456789 to +03234567890", () =>
        expect(encrypt(largeKey, "+92123456789")).toBe("+03234567890"));
    test("should convert '' to ''", () => expect(encrypt(largeKey, "")).toBe(""));
    test("should convert ABC to FGH", () => expect(encrypt(largeKey, "ABC")).toBe("FGH"));
    test("should convert XYZ to CDE", () => expect(encrypt(largeKey, "XYZ")).toBe("CDE"));
});
