export default class NumberCipher {
    characterCode: number;
    shiftAmount: number;

    constructor(code: number, key: number) {
        this.characterCode = code;
        this.shiftAmount = key % 10;
    }

    encrypt(): string {
        if (this.characterCode + this.shiftAmount > 57) {
            this.characterCode -= 10;
        }

        this.characterCode += this.shiftAmount;
        return String.fromCharCode(this.characterCode);
    }

    decrypt(): string {
        if (this.characterCode - this.shiftAmount < 48) {
            this.characterCode += 10;
        }

        this.characterCode -= this.shiftAmount;
        return String.fromCharCode(this.characterCode);
    }
}
