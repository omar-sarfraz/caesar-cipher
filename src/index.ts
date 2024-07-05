import { createEncrypter } from "./encrypt";
import { createDecrypter } from "./decrypt";

interface Cipher {
  encrypt: Function;
  decrypt: Function;
}

export function cipher(key: number): Cipher {
  const encrypt = createEncrypter(key);
  const decrypt = createDecrypter(key);

  return { encrypt, decrypt };
}
