import { searchInsert } from './no-35-search-insert-position';

describe('searchInsert', () => {
  test.concurrent.each([
    { nums: [1, 3, 5, 6], target: 5, expected: 2 },
    { nums: [1, 3, 5, 6], target: 2, expected: 1 },
    { nums: [1, 3, 5, 6], target: 7, expected: 4 },
    { nums: [1, 3, 5, 6], target: 0, expected: 0 },
    { nums: [1], target: 0, expected: 0 },
    { nums: [1], target: 1, expected: 0 },
    { nums: [1], target: 2, expected: 1 },
    { nums: [], target: 3, expected: 0 },
  ])(
    'searchInsert($nums, $target) should return $expected',
    async ({ nums, target, expected }) => {
      expect(searchInsert(nums, target)).toBe(expected);
    }
  );
});
