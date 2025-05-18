import { isPalindrome } from './no-9-palindrome-number';

describe('isPalindrome', () => {
  test.concurrent.each([
    { input: 121, expected: true },
    { input: -121, expected: false },
    { input: 10, expected: false },
    { input: 0, expected: true },
    { input: 12321, expected: true },
    { input: 123321, expected: true },
    { input: 12345, expected: false },
    { input: 1000021, expected: false },
    { input: 1, expected: true },
    { input: 11, expected: true },
    { input: 22, expected: true },
  ])('isPalindrome(%d) should return %s', async ({ input, expected }) => {
    expect(isPalindrome(input)).toBe(expected);
  });
});
