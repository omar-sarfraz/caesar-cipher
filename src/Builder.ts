import UpperCaseCipher from "./UpperCaseCipher";
import LowerCaseCipher from "./LowerCaseCipher";
import NumberCipher from "./NumberCipher";
import DefaultCipher from "./DefaultCipher";

interface BuilderType {
    cipher: UpperCaseCipher | LowerCaseCipher | NumberCipher | DefaultCipher;
}

export class Builder implements BuilderType {
    cipher;

    constructor(character: string, key: number) {
        let characterCode = character.charCodeAt(0);

        if (characterCode <= 90 && characterCode >= 65) {
            this.cipher = new UpperCaseCipher(characterCode, key);
        } else if (characterCode <= 122 && characterCode >= 97) {
            this.cipher = new LowerCaseCipher(characterCode, key);
        } else if (characterCode <= 57 && characterCode >= 48) {
            this.cipher = new NumberCipher(characterCode, key);
        } else {
            this.cipher = new DefaultCipher(characterCode);
        }
    }

    get() {
        return this.cipher;
    }
}
