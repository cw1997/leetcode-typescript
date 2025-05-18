import { myAtoi } from './no-8-string-to-integer-atoi';

describe('myAtoi', () => {
  test.concurrent.each([
    { input: '42', expected: 42 },
    { input: '   -42', expected: -42 },
    { input: '4193 with words', expected: 4193 },
    { input: 'words and 987', expected: 0 },
    { input: '-91283472332', expected: -2147483648 },
    { input: '91283472332', expected: 2147483647 },
    { input: '+1', expected: 1 },
    { input: '+-12', expected: 0 },
    { input: '', expected: 0 },
    { input: '   ', expected: 0 },
    { input: '00000-42a1234', expected: 0 },
    { input: '   +0 123', expected: 0 },
    { input: '  0000000000012345678', expected: 12345678 },
    { input: '-000000000000001', expected: -1 },
    { input: '3.14159', expected: 3 },
    { input: '-2147483649', expected: -2147483648 },
    { input: '2147483648', expected: 2147483647 },
  ])('myAtoi("%s") should return %d', async ({ input, expected }) => {
    expect(myAtoi(input)).toBe(expected);
  });
});
