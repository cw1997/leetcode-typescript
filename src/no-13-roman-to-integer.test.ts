import { romanToInt } from './no-13-roman-to-integer';

describe('romanToInt', () => {
  test.concurrent.each([
    // { input: 'III', expected: 3 },
    { input: 'IV', expected: 4 },
    // { input: 'IX', expected: 9 },
    // { input: 'LVIII', expected: 58 }, // L = 50, V=5, III=3
    // { input: 'MCMXCIV', expected: 1994 }, // M=1000, CM=900, XC=90, IV=4
    // { input: 'XL', expected: 40 },
    // { input: 'XC', expected: 90 },
    // { input: 'CD', expected: 400 },
    // { input: 'CM', expected: 900 },
    // { input: 'I', expected: 1 },
    // { input: 'MMMCMXCIX', expected: 3999 },
  ])('romanToInt("%s") should return %d', async ({ input, expected }) => {
    expect(romanToInt(input)).toBe(expected);
  });
});
