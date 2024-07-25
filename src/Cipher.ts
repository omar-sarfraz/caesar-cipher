import { Builder } from "./Builder";

export default class Cipher {
    key: number;

    constructor(key: number) {
        this.key = key;
    }

    encrypt(s: string): string {
        let result: string = "";

        for (let i = 0; i < s.length; i++) {
            let character = s[i];

            let cipher = new Builder(character, this.key);
            result += cipher.get().encrypt();
        }

        return result;
    }

    decrypt(s: string): string {
        let result: string = "";

        for (let i = 0; i < s.length; i++) {
            let character = s[i];

            let cipher = new Builder(character, this.key);
            result += cipher.get().decrypt();
        }

        return result;
    }
}
