const preSchoolSum = require('./preSchoolSum');

test('10 alatti egész szám esetén visszaadja az eredményt magát.', () => {
  expect(preSchoolSum(4, 4)).toBe(8);
});

test('0 alatti szám esetén visszaadja az 0-t.', () => {
  expect(preSchoolSum(-24, 4)).toBe(0);
});
