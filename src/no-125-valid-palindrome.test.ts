import { isPalindrome } from './no-125-valid-palindrome';

describe('isPalindrome', () => {
  test.concurrent.each([
    { input: "A man, a plan, a canal: Panama", expected: true },
    { input: "race a car", expected: false },
    { input: "", expected: true },
    { input: " ", expected: true },
    { input: "0P", expected: false },
    { input: "madam", expected: true },
    { input: "No lemon, no melon", expected: true },
    { input: "Was it a car or a cat I saw?", expected: true },
  ])('isPalindrome("$input") should return $expected', async ({ input, expected }) => {
    expect(isPalindrome(input)).toBe(expected);
  });
});
