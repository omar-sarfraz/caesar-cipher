const createEncrypter = require("./encrypt");
const createDecrypter = require("./decrypt");

interface Cipher {
  encrypt: Function;
  decrypt: Function;
}

module.exports = function cipher(key: number): Cipher {
  const encrypt = createEncrypter(key);
  const decrypt = createDecrypter(key);

  return { encrypt, decrypt };
};
