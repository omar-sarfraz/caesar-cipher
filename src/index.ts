const createEncrypter = require("./encrypt");
const createDecrypter = require("./decrypt");

interface Cipher {
    encrypt: Function;
    decrypt: Function;
}

module.exports = function cipher(key: number): Cipher {
    if (!key || key < 1) throw new Error("Key must be a positive integer greater than 0");

    const encrypt: Function = createEncrypter(key);
    const decrypt: Function = createDecrypter(key);

    return { encrypt, decrypt };
};
