const { encrypt, decrypt } = require("./build/index");

try {
    const val = "test@gmail.com";

    const encryptedVal = encrypt(5, val);
    console.log(encryptedVal); // yjxy@lrfnq.htr

    const decryptedVal = decrypt(5, encryptedVal);
    console.log(decryptedVal); // test@gmail.com
} catch (e) {
    console.log("Error =>", e.message);
}
