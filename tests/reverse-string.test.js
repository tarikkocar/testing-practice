const reverseString = require("../scripts/reverse-string");

test("Basic test", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Empty string", () => {
  expect(reverseString("")).toBe("");
});

test("Palindrome", () => {
  expect(reverseString("hannah")).toBe("hannah");
});

test("Reverse sentence", () => {
  expect(reverseString("same it as ever was")).toBe("saw reve sa ti emas");
});

test("Numbers", () => {
  expect(reverseString("123abc")).toBe("cba321");
});

test("Unicode characters", () => {
  expect(reverseString("über")).toBe("rebü");
});

test("Non-string argument", () => {
  expect(() => reverseString(178)).toThrow("Input must be a string");
});
