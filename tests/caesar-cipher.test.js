const caesarCipher = require("../scripts/caesar-cipher");

test("Basic test", () => {
  expect(caesarCipher("hello", 1)).toBe("ifmmp");
});

test("Empty string", () => {
  expect(caesarCipher("", 3)).toBe("");
});

test("Wrapping around the alphabet", () => {
  expect(caesarCipher("abcxyz", 5)).toBe("fghcde");
  expect(caesarCipher("cryptanalysis is the art of breaking codes", 10)).toBe(
    "mbizdkxkvicsc sc dro kbd yp lbokusxq mynoc"
  );
});

test("No shift", () => {
  expect(caesarCipher("same it as ever was", 0)).toBe("same it as ever was");
});

test("Large shift", () => {
  expect(caesarCipher("distribution", 40)).toBe("rwghfwpihwcb");
});

test("Negative shift", () => {
  expect(caesarCipher("substitution", -3)).toBe("prypqfqrqflk");
});

test("Mixed case", () => {
  expect(caesarCipher("Communication", 7)).toBe("Jvttbupjhapvu");
});

test("Punctuation", () => {
  expect(caesarCipher("punctuation!", 5)).toBe("uzshyzfynts!");
});

test("Non-string argument", () => {
  expect(() => caesarCipher(178, 3)).toThrow("Input must be a string");
});
