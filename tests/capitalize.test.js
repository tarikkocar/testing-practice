const capitalize = require("../scripts/capitalize");

test("Basic test", () => {
  expect(capitalize("hi")).toBe("Hi");
});

test("Empty string", () => {
  expect(capitalize("")).toBe("");
});

test("Already capitalized", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("Capitalize sentence", () => {
  expect(capitalize("same it as ever was")).toBe("Same it as ever was");
});

test("Numbers", () => {
  expect(capitalize("100 years ago")).toBe("100 years ago");
});

test("Special characters", () => {
  expect(capitalize("#Rainy days")).toBe("#Rainy days");
});

test("Unicode characters", () => {
  expect(capitalize("über")).toBe("Über");
});

test("Non-string argument", () => {
  expect(() => capitalize(178)).toThrow("Input must be a string");
});
