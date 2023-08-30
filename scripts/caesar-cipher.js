function caesarCipher(string, shift) {
  if (typeof string !== "string") {
    throw new Error("Input must be a string");
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const stringLower = string.toLowerCase();
  const effectiveShift = ((shift % 26) + 26) % 26;

  let encrypted = "";

  for (let i = 0; i < string.length; i++) {
    const char = stringLower[i];
    if (alphabet.includes(char)) {
      const index = (alphabet.indexOf(char) + effectiveShift) % 26;
      encrypted +=
        string[i] === char ? alphabet[index] : alphabet[index].toUpperCase();
    } else {
      encrypted += char;
    }
  }

  return encrypted;
}

module.exports = caesarCipher;
