export default class DefaultCipher {
    characterCode: number;

    constructor(code: number) {
        this.characterCode = code;
    }

    encrypt(): string {
        return String.fromCharCode(this.characterCode);
    }

    decrypt(): string {
        return String.fromCharCode(this.characterCode);
    }
}
