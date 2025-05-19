import { removeElement } from './no-27-remove-element';

describe('removeElement', () => {
  test.concurrent.each([
    {
      input: [3, 2, 2, 3],
      val: 3,
      expectedLen: 2,
      expectedNums: [2, 2],
    },
    {
      input: [0,1,2,2,3,0,4,2],
      val: 2,
      expectedLen: 5,
      expectedNums: [0,1,3,0,4],
    },
    {
      input: [],
      val: 1,
      expectedLen: 0,
      expectedNums: [],
    },
    {
      input: [1,1,1],
      val: 1,
      expectedLen: 0,
      expectedNums: [],
    },
    {
      input: [4,5],
      val: 4,
      expectedLen: 1,
      expectedNums: [5],
    },
  ])(
    'removeElement(%j, val=%i) should return length %i and valid nums %j',
    async ({ input, val, expectedLen, expectedNums }) => {
      const nums = [...input];
      const len = removeElement(nums, val);
      expect(len).toBe(expectedLen);
      expect(nums.slice(0, len).sort()).toEqual(expectedNums.sort());
    }
  );
});
