import Cipher from "./Cipher";

export const encrypt = (key: number, str: string) => {
    if (!key || key < 1 || typeof key !== "number")
        throw new Error("Key must be a positive integer greater than 0");
    const cipher = new Cipher(key);
    return cipher.encrypt(str);
};

export const decrypt = (key: number, str: string) => {
    if (!key || key < 1 || typeof key !== "number")
        throw new Error("Key must be a positive integer greater than 0");
    const cipher = new Cipher(key);
    return cipher.decrypt(str);
};
