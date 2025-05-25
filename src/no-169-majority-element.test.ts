import { majorityElement } from './no-169-majority-element';

describe('majorityElement (Boyer–Moore Majority Vote)', () => {
  test.concurrent.each([
    { nums: [3, 2, 3], expected: 3 },
    { nums: [2, 2, 1, 1, 1, 2, 2], expected: 2 },
    { nums: [1], expected: 1 },
    { nums: [1, 1, 1, 2, 3, 4, 1], expected: 1 },
    { nums: [5, 5, 5, 5, 5, 2, 3], expected: 5 },
    { nums: [6, 7, 6, 6, 7, 6, 6], expected: 6 },
  ])('majorityElement(%j) -> $expected', async ({ nums, expected }) => {
    expect(majorityElement(nums)).toBe(expected);
  });
});
