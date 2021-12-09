const reverseString = require("../functions/reverseString");

test('Reverses a given string', () => {
    expect(reverseString("String")).toBe("gnirtS");
});