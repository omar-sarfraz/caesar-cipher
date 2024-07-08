module.exports = function createDecrypter(key: number): Function {
  return (s: string): string => {
    // 65 - 90 is ASCII Code for A - Z
    // 97 - 122 is ASCII Code for a - z

    let result: string = "";
    let shiftAmount: number = key % 26;

    for (let i = 0; i < s.length; i++) {
      let character: string = s[i];
      let characterCode: number = character.charCodeAt(0);

      if (characterCode <= 90 && characterCode >= 65) {
        // UpperCase Letter
        if (characterCode - shiftAmount < 65) {
          characterCode += 26;
        }
      } else if (characterCode <= 122 && characterCode >= 97) {
        // LowerCase Letter
        if (characterCode - shiftAmount < 97) {
          characterCode += 26;
        }
      } else if (characterCode <= 57 && characterCode >= 48) {
        // Digits
        if (characterCode - shiftAmount < 48) {
          characterCode += 10;
        }
      } else {
        // Ignore other characters
        result += String.fromCharCode(characterCode);
        continue;
      }

      characterCode -= shiftAmount;
      result += String.fromCharCode(characterCode);
    }

    return result;
  };
};
