import { mySqrt } from './no-69-sqrtx';

describe('mySqrt', () => {
  test.concurrent.each([
    { input: 0, expected: 0 },
    { input: 1, expected: 1 },
    { input: 4, expected: 2 },
    { input: 8, expected: 2 },  // sqrt(8) ≈ 2.828
    { input: 9, expected: 3 },
    { input: 15, expected: 3 },
    { input: 16, expected: 4 },
    { input: 2147395599, expected: 46339 }, // close to sqrt(INT_MAX)
    { input: 2147483647, expected: 46340 }, // INT_MAX
  ])(
    'mySqrt($input) should return $expected',
    async ({ input, expected }) => {
      expect(mySqrt(input)).toBe(expected);
    }
  );
});
