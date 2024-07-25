export default class LowerCaseCipher {
    characterCode: number;
    shiftAmount: number;

    constructor(code: number, key: number) {
        this.characterCode = code;
        this.shiftAmount = key % 26;
    }

    encrypt(): string {
        if (this.characterCode + this.shiftAmount > 122) {
            this.characterCode -= 26;
        }

        this.characterCode += this.shiftAmount;
        return String.fromCharCode(this.characterCode);
    }

    decrypt(): string {
        if (this.characterCode - this.shiftAmount < 97) {
            this.characterCode += 26;
        }

        this.characterCode -= this.shiftAmount;
        return String.fromCharCode(this.characterCode);
    }
}
