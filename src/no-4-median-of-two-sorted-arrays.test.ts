import { findMedianSortedArrays } from './no-4-median-of-two-sorted-arrays';

describe('findMedianSortedArrays', () => {
  test.concurrent.each([
    { nums1: [1, 3], nums2: [2], expected: 2.0 },
    { nums1: [1, 2], nums2: [3, 4], expected: 2.5 },
    { nums1: [0, 0], nums2: [0, 0], expected: 0.0 },
    { nums1: [], nums2: [1], expected: 1.0 },
    { nums1: [2], nums2: [], expected: 2.0 },
    { nums1: [1, 3, 5], nums2: [2, 4, 6], expected: 3.5 },
    { nums1: [1], nums2: [2, 3, 4], expected: 2.5 },
    { nums1: [100001], nums2: [100000], expected: 100000.5 },
    { nums1: [], nums2: [1, 2, 3, 4, 5], expected: 3 },
    { nums1: [], nums2: [2, 3], expected: 2.5 },
  ])(
    'returns $expected for nums1=$nums1 and nums2=$nums2',
    async ({ nums1, nums2, expected }) => {
      expect(findMedianSortedArrays(nums1, nums2)).toBe(expected);
    }
  );
});
