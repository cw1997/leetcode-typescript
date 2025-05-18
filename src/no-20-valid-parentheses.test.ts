import { isValid } from './no-20-valid-parentheses';

describe('isValid', () => {
  test.concurrent.each([
    { input: '()', expected: true },
    { input: '()[]{}', expected: true },
    { input: '(]', expected: false },
    { input: '([)]', expected: false },
    { input: '{[]}', expected: true },
    { input: '', expected: true },
    { input: '(', expected: false },
    { input: ')', expected: false },
    { input: '((()))', expected: true },
    { input: '(()', expected: false },
    { input: '())', expected: false },
    { input: '([{}])', expected: true },
    { input: '([{}]))', expected: false },
  ])('isValid("%s") should return %s', async ({ input, expected }) => {
    expect(isValid(input)).toBe(expected);
  });
});
