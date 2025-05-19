import { climbStairs } from './no-70-climbing-stairs';

describe('climbStairs', () => {
  test.concurrent.each([
    { input: 1, expected: 1 },
    { input: 2, expected: 2 },
    { input: 3, expected: 3 },
    { input: 4, expected: 5 },
    { input: 5, expected: 8 },
    { input: 10, expected: 89 },
    { input: 20, expected: 10946 },
    { input: 30, expected: 1346269 },
    { input: 45, expected: 1836311903 },
  ])(
    'climbStairs($input) should return $expected',
    async ({ input, expected }) => {
      expect(climbStairs(input)).toBe(expected);
    }
  );
});
