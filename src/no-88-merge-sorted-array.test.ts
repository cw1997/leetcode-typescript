import { merge } from './no-88-merge-sorted-array';

describe('merge', () => {
  test.concurrent.each([
    // {
    //   nums1: [1, 2, 3, 0, 0, 0],
    //   m: 3,
    //   nums2: [2, 5, 6],
    //   n: 3,
    //   expected: [1, 2, 2, 3, 5, 6]
    // },
    {
      nums1: [2, 2, 3, 0, 0, 0],
      m: 3,
      nums2: [1, 5, 6],
      n: 3,
      expected: [1, 2, 2, 3, 5, 6]
    },
    {
      nums1: [1],
      m: 1,
      nums2: [],
      n: 0,
      expected: [1]
    },
    {
      nums1: [0],
      m: 0,
      nums2: [1],
      n: 1,
      expected: [1]
    },
    {
      nums1: [2, 0],
      m: 1,
      nums2: [1],
      n: 1,
      expected: [1, 2]
    },
    {
      nums1: [4, 5, 6, 0, 0, 0],
      m: 3,
      nums2: [1, 2, 3],
      n: 3,
      expected: [1, 2, 3, 4, 5, 6]
    }
  ])(
    'merge(%j, %i, %j, %i) should modify nums1 to %j',
    async ({ nums1, m, nums2, n, expected }) => {
      const input = [...nums1]; // 防止污染测试用例
      merge(input, m, [...nums2], n);
      expect(input).toEqual(expected);
    }
  );
});
