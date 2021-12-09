const capitalize = require("../functions/capitalize");

test('Capitalizes the first letter of a string.', () =>{
    expect(capitalize("string")).toBe("String");
});