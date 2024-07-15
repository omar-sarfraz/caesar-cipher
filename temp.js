const { encrypt, decrypt } = require("./build/index");

try {
    console.log(encrypt(5, "abc"));
    console.log(decrypt(5, "abc"));
} catch (e) {
    console.log("Error => ", e);
}
