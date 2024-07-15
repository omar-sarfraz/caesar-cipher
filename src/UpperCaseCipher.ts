export default class UpperCaseCipher {
    characterCode: number;
    shiftAmount: number;

    constructor(code: number, key: number) {
        this.characterCode = code;
        this.shiftAmount = key % 26;
    }

    encrypt(): string {
        if (this.characterCode + this.shiftAmount > 90) {
            this.characterCode -= 26;
        }

        this.characterCode += this.shiftAmount;
        return String.fromCharCode(this.characterCode);
    }

    decrypt(): string {
        if (this.characterCode - this.shiftAmount < 65) {
            this.characterCode += 26;
        }

        this.characterCode -= this.shiftAmount;
        return String.fromCharCode(this.characterCode);
    }
}
