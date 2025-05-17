import { longestPalindrome } from './no-5-longest-palindromic-substring';

describe('longestPalindrome', () => {
  test.concurrent.each([
    { input: 'babad', expected: ['bab', 'aba'] },
    { input: 'cbbd', expected: ['bb'] },
    { input: 'a', expected: ['a'] },
    { input: 'ac', expected: ['a', 'c'] },
    { input: 'racecar', expected: ['racecar'] },
    { input: 'abacdfgdcaba', expected: ['aba'] },
    { input: 'aaaa', expected: ['aaaa'] },
    { input: 'abcda', expected: ['a', 'b', 'c', 'd'] }, // 任意一字母都行
    { input: '', expected: [''] },
    { input: 'abcddcbabcdefedcba', expected: ['abcdefedcba'] },
  ])('returns one of %j for input "%s"', async ({ input, expected }) => {
    const result = longestPalindrome(input);
    expect(expected).toContain(result);
  });
});
