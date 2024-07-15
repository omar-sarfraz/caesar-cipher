const cipher = require("../build/index.js");
require("dotenv").config();
const { decrypt } = cipher(process.env.TEST_CIPHER_KEY);

describe("decrypt", () => {
  test("should convert fgh to abc", () => expect(decrypt("fgh")).toBe("abc"));
  test("should convert cde to xyz", () => expect(decrypt("cde")).toBe("xyz"));
  test("should convert 6582 to 1037", () => expect(decrypt("6582")).toBe("1037"));
  test("should convert trfw.xfwkwfe@fwgnxtky.htr to omar.sarfraz@arbisoft.com", () =>
    expect(decrypt("trfw.xfwkwfe@fwgnxtky.htr")).toBe("omar.sarfraz@arbisoft.com"));
  test("should convert +47678901234 to +92123456789", () =>
    expect(decrypt("+47678901234")).toBe("+92123456789"));
  test("should convert '' to ''", () => expect(decrypt("")).toBe(""));
  test("should convert FGH to ABC", () => expect(decrypt("FGH")).toBe("ABC"));
});
