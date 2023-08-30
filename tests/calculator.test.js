const calculator = require("../scripts/calculator");

test("Addition", () => {
  expect(calculator.add(3, 5)).toBe(8);
});

test("Subtraction", () => {
  expect(calculator.subtract(10, 28)).toBe(-18);
});

test("Multiplication", () => {
  expect(calculator.multiply(5, 13)).toBe(65);
});

test("Division", () => {
  expect(calculator.divide(63, 3)).toBe(21);
});

test("Decimals", () => {
  expect(calculator.add(12.5, 3.5)).toBeCloseTo(16);
  expect(calculator.subtract(7.5, 2.5)).toBeCloseTo(5);
  expect(calculator.multiply(2.4, 3.5)).toBeCloseTo(8.4);
  expect(calculator.divide(7.5, 2.5)).toBeCloseTo(3);
});

test("Division by Zero", () => {
  expect(calculator.divide(63, 0)).toBe(Infinity);
});

test("Non-number argument", () => {
  expect(calculator.add("a", "b")).toBe("ab");
  expect(calculator.subtract("a", "b")).toBe(NaN);
  expect(calculator.multiply("a", "b")).toBe(NaN);
  expect(calculator.divide("a", "b")).toBe(NaN);
});
