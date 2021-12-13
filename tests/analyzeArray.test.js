const analyzeArray = require("../functions/analyzeArray");

test("Get length of array", () => {
    expect(analyzeArray([1, 2, 3]).length).toBe(3);
})

test("Get lowest value of array", () => {
    expect(analyzeArray([1, 2, 3]).min).toBe(1);
})

test("Get highest value of array", () => {
    expect(analyzeArray([1, 2, 3]).max).toBe(3);
})

test("Get average of array", () => {
    expect(analyzeArray([1, 2, 3]).average).toBe(2);
})