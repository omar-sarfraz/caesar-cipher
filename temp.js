const createCipher = require("./build/index.js");

try {
    const { encrypt, decrypt } = createCipher(0);
} catch (e) {
    console.log("Error => ", e.message);
}
