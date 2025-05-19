import { removeDuplicates } from './no-26-remove-duplicates-from-sorted-array';

describe('removeDuplicates', () => {
  test.concurrent.each([
    { input: [1, 1, 2], expectedLen: 2, expectedNums: [1, 2] },
    { input: [0,0,1,1,1,2,2,3,3,4], expectedLen: 5, expectedNums: [0,1,2,3,4] },
    { input: [], expectedLen: 0, expectedNums: [] },
    { input: [1,1,1,1], expectedLen: 1, expectedNums: [1] },
    { input: [1,2,3], expectedLen: 3, expectedNums: [1,2,3] },
    { input: [1], expectedLen: 1, expectedNums: [1] },
  ])(
    'removeDuplicates(%j) should return length %i and nums %j',
    async ({ input, expectedLen, expectedNums }) => {
      const nums = [...input]; // 复制一份避免修改原数据
      const len = removeDuplicates(nums);
      expect(len).toBe(expectedLen);
      expect(nums.slice(0, len)).toEqual(expectedNums);
    }
  );
});
