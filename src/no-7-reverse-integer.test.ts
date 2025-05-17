import { reverse } from './no-7-reverse-integer';

describe('reverse', () => {
  test.concurrent.each([
    { input: 123, expected: 321 },
    { input: -123, expected: -321 },
    { input: 120, expected: 21 },
    { input: 0, expected: 0 },
    { input: 1534236469, expected: 0 },         // overflow
    { input: -2147483648, expected: 0 },        // underflow
    { input: -21474836480, expected: 0 },        // underflow
    { input: 1463847412, expected: 2147483641 },// safe
    { input: 1000000003, expected: 0 },         // overflow
    { input: 1, expected: 1 },
  ])('reverse($input) should return $expected', async ({ input, expected }) => {
    expect(reverse(input)).toBe(expected);
  });
});
