/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (m === 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i]
    }
    return
  }

  let p1 = m - 1, p2 = n - 1, p = m + n - 1
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] < nums2[p2]) {
      nums1[p--] = nums2[p2--]
    } else {
      nums1[p--] = nums1[p1--]
    }
  }

  while (p1 >= 0) {
    nums1[p--] = nums1[p1--]
  }

  while (p2 >= 0) {
    nums1[p--] = nums2[p2--]
  }
};