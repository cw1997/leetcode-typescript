import { longestCommonPrefix } from './no-14-longest-common-prefix';

describe('longestCommonPrefix', () => {
  test.concurrent.each([
    { input: ['flower', 'flow', 'flight'], expected: 'fl' },
    { input: ['dog', 'racecar', 'car'], expected: '' },
    { input: ['interspace', 'interstellar', 'internet'], expected: 'inter' },
    { input: ['a'], expected: 'a' },
    { input: ['ab', 'a'], expected: 'a' },
    { input: ['abc', 'abc'], expected: 'abc' },
    { input: ['abc', ''], expected: '' },
    { input: ['', ''], expected: '' },
    { input: ['prefix', 'prefixes', 'prefixation'], expected: 'prefix' },
    { input: ['prefix', 'pre'], expected: 'pre' },
    { input: ['pre', 'prefix'], expected: 'pre' },
    { input: ['pre', ''], expected: '' },
    { input: [], expected: '' },
  ])('longestCommonPrefix($input) should return "$expected"', async ({ input, expected }) => {
    expect(longestCommonPrefix(input)).toBe(expected);
  });
});
