const test = require("./myTestLib.js");
const preSchoolSum = require("./preSchoolSum.js");

test(8, preSchoolSum(4, 4), "Tíz alatti egész eredménynél visszaadja magát a számot.");
test(0, preSchoolSum(-14, 4), "0 alatti eredmény esetén 0-t ad vissza.");
test("sok", preSchoolSum(14, 4), "10 feletti eredmény esetén visszaadja a 'sok' szöveget.");
test(10, preSchoolSum(6, 4), "10 esetén visszaadja a 10-et.");
