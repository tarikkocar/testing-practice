function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("Input must be a string");
  }

  if (string.length === 0) return "";

  return string.slice(-1) + reverseString(string.slice(0, -1));
}

module.exports = reverseString;
