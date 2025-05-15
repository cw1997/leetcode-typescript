import { twoSum } from './no-1-two-sum';

describe('twoSum', () => {
  test.concurrent.each([
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
    { nums: [1, 2, 3, 4, 5], target: 9, expected: [3, 4] },
    { nums: [0, 4, 3, 0], target: 0, expected: [0, 3] },
  ])('returns $expected for nums=$nums and target=$target', async ({ nums, target, expected }) => {
    const result = twoSum(nums, target);
    expect(result.sort()).toEqual(expected.sort());
  });
});
