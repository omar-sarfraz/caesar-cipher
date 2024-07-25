const { decrypt } = require("../build/index.js");

describe("decrypt: smallkey", () => {
    const smallKey = 5;

    test("should convert fgh to abc", () => expect(decrypt(smallKey, "fgh")).toBe("abc"));
    test("should convert cde to xyz", () => expect(decrypt(smallKey, "cde")).toBe("xyz"));
    test("should convert 6582 to 1037", () => expect(decrypt(smallKey, "6582")).toBe("1037"));
    test("should convert trfw.xfwkwfe@fwgnxtky.htr to omar.sarfraz@arbisoft.com", () =>
        expect(decrypt(smallKey, "trfw.xfwkwfe@fwgnxtky.htr")).toBe("omar.sarfraz@arbisoft.com"));
    test("should convert +47678901234 to +92123456789", () =>
        expect(decrypt(smallKey, "+47678901234")).toBe("+92123456789"));
    test("should convert '' to ''", () => expect(decrypt(smallKey, "")).toBe(""));
    test("should convert FGH to ABC", () => expect(decrypt(smallKey, "FGH")).toBe("ABC"));
    test("should convert CDE to XYZ", () => expect(decrypt(smallKey, "CDE")).toBe("XYZ"));
});

describe("decrypt: largekey", () => {
    const largeKey = 31;

    test("should convert fgh to abc", () => expect(decrypt(largeKey, "fgh")).toBe("abc"));
    test("should convert cde to xyz", () => expect(decrypt(largeKey, "cde")).toBe("xyz"));
    test("should convert 2148 to 1037", () => expect(decrypt(largeKey, "2148")).toBe("1037"));
    test("should convert trfw.xfwkwfe@fwgnxtky.htr to omar.sarfraz@arbisoft.com", () =>
        expect(decrypt(largeKey, "trfw.xfwkwfe@fwgnxtky.htr")).toBe("omar.sarfraz@arbisoft.com"));
    test("should convert +03234567890 to +92123456789", () =>
        expect(decrypt(largeKey, "+03234567890")).toBe("+92123456789"));
    test("should convert '' to ''", () => expect(decrypt(largeKey, "")).toBe(""));
    test("should convert FGH to ABC", () => expect(decrypt(largeKey, "FGH")).toBe("ABC"));
    test("should convert CDE to XYZ", () => expect(decrypt(largeKey, "CDE")).toBe("XYZ"));
});
