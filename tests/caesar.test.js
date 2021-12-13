const caesar = require("../functions/caesar");

test("Codes a string into a Caesar Cipher", () => {
    expect(caesar("ab c")).toBe("bc d");
})

test("Rejects anything aside from spaces and letters", () => {
    expect(caesar("ab2")).toBe("Error");
    expect(caesar("ab@")).toBe("Error");
})