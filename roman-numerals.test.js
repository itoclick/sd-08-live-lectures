const convertToRoman = require('./roman-numerals');
const assert = require('assert');

test('Converte números de 1 a 4.', () => {
  expect(convertToRoman(1)).toBe('I');
  expect(convertToRoman(2)).toBe('II');
  expect(convertToRoman(3)).toBe('III');
  expect(convertToRoman(4)).toBe('IV');
})


assert.equal(typeof convertToRoman, 'function');
assert.equal(convertToRoman(1), 'I');
assert.equal(convertToRoman(2), 'II');
assert.equal(convertToRoman(3), 'III');
assert.equal(convertToRoman(4), 'IV');

describe('Converte os números 5 até 7', () => {
  test('Converte número 5.', () => {
    expect(convertToRoman(5)).toBe('V');
  });

  test('Converte número 6.', () => {
    expect(convertToRoman(6)).toBe('VI');
  });

  test('Converte número 7.', () => {
    expect(convertToRoman(7)).toBe('VII');
  });
});

assert.equal(convertToRoman(5), 'V');
assert.equal(convertToRoman(6), 'VI');
assert.equal(convertToRoman(7), 'VII');
assert.equal(convertToRoman(8), 'VIII');
assert.equal(convertToRoman(9), 'IX');

assert.equal(convertToRoman(10), 'X');
assert.equal(convertToRoman(11), 'XI');
assert.equal(convertToRoman(12), 'XII');
assert.equal(convertToRoman(13), 'XIII');
assert.equal(convertToRoman(14), 'XIV');
assert.equal(convertToRoman(15), 'XV');
assert.equal(convertToRoman(26), 'XXVI');
assert.equal(convertToRoman(43), 'XLIII');

assert.equal(convertToRoman(50), 'L');
assert.equal(convertToRoman(55), 'LV');
assert.equal(convertToRoman(76), 'LXXVI');

assert.equal(convertToRoman(100), 'C');
assert.equal(convertToRoman(200), 'CC');
assert.equal(convertToRoman(227), 'CCXXVII');

assert.equal(convertToRoman(500), 'D');
assert.equal(convertToRoman(576), 'DLXXVI');
assert.equal(convertToRoman(981), 'CMLXXXI');

assert.equal(convertToRoman(1000), 'M');
assert.equal(convertToRoman(2999), 'MMCMXCIX');
assert.equal(convertToRoman(3000), 'MMM');