import { lengthOfLongestSubstring } from './no-3-longest-substring-without-repeating-characters';

describe('lengthOfLongestSubstring', () => {
  test.concurrent.each([
    { input: 'abcabcbb', expected: 3 },
    { input: 'bbbbb', expected: 1 },
    { input: 'pwwkew', expected: 3 },
    { input: '', expected: 0 },
    { input: ' ', expected: 1 },
    { input: 'au', expected: 2 },
    { input: 'dvdf', expected: 3 },
    { input: 'anviaj', expected: 5 },
    { input: 'abba', expected: 2 },
  ])('returns $expected for input="$input"', async ({ input, expected }) => {
    expect(lengthOfLongestSubstring(input)).toBe(expected);
  });
});
