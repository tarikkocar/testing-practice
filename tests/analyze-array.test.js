const analyzeArray = require("../scripts/analyze-array");

test("Basic test", () => {
  expect(analyzeArray([2, 5, 8, 11])).toStrictEqual({
    average: 6.5,
    min: 2,
    max: 11,
    length: 4,
  });
});

test("Negative numbers", () => {
  expect(analyzeArray([-6, 15, -28, 67, 24])).toStrictEqual({
    average: 14.4,
    min: -28,
    max: 67,
    length: 5,
  });
});

test("Decimals", () => {
  const result = analyzeArray([1.5, 2.75, 3.25, 4.8, 7.62]);

  expect(Math.abs(result.average - 3.984)).toBeLessThanOrEqual(0.001);
  expect(result.min).toBe(1.5);
  expect(result.max).toBe(7.62);
  expect(result.length).toBe(5);
});

test("Single number", () => {
  expect(analyzeArray([87])).toStrictEqual({
    average: 87,
    min: 87,
    max: 87,
    length: 1,
  });
});

test("Empty array", () => {
  expect(analyzeArray([])).toStrictEqual({
    average: NaN,
    min: Infinity,
    max: -Infinity,
    length: 0,
  });
});
