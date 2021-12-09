const calculator = require("../functions/calculator");

test("Adds two values together", () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test("Subtracts one value from another", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
});

test("Multiplies one value against another", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

test("Divides one value by another", () => {
    expect(calculator.divide(2, 2)).toBe(1);
});