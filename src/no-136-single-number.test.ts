import { singleNumber } from './no-136-single-number';

describe('singleNumber', () => {
  test.concurrent.each([
    { input: [2, 2, 1], expected: 1 },
    { input: [4, 1, 2, 1, 2], expected: 4 },
    { input: [1], expected: 1 },
    { input: [0, 1, 0], expected: 1 },
    { input: [-1, -1, 99], expected: 99 },
    { input: [5, 5, 100], expected: 100 },
  ])('singleNumber(%j) should return %s', async ({ input, expected }) => {
    expect(singleNumber(input)).toBe(expected);
  });
});
