const {default: TestRunner} = require("jest-runner");
const addFive = require("./addFiveFunc.js");

console.log(addFive);
console.log(addFive(5));
//console.log(addFive(1));

test("Returns number plus 5", () => {
    expect(addFive(1)).toBe(6);
});