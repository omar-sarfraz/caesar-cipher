const cipher = require("../build/index.js");
const { encrypt } = cipher(5);

describe("encrypt", () => {
  test("should convert abc to fgh", () => expect(encrypt("abc")).toBe("fgh"));
  test("should convert xyz to cde", () => expect(encrypt("xyz")).toBe("cde"));
  test("should convert 1037 to 6582", () => expect(encrypt("1037")).toBe("6582"));
  test("should convert omar.sarfraz@arbisoft.com to trfw.xfwkwfe@fwgnxtky.htr", () =>
    expect(encrypt("omar.sarfraz@arbisoft.com")).toBe("trfw.xfwkwfe@fwgnxtky.htr"));
  test("should convert +92123456789 to +47678901234", () =>
    expect(encrypt("+92123456789")).toBe("+47678901234"));
});
