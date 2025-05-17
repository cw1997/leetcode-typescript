export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let result = 0;

  if (nums1.length > nums2.length) {
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  const total_length = nums1.length + nums2.length;

  const mid_index = Math.floor(total_length / 2);
  // const odd = total_length % 2 === 1;

  const arr: number[] = []
  let i1 = 0, i2 = 0;
  while (i1 < nums1.length && i2 < nums2.length) {
    if (nums1[i1] < nums2[i2]) {
      arr.push(nums1[i1++])
    } else {
      arr.push(nums2[i2++])
    }
  }
  while (i1 < nums1.length) {
    arr.push(nums1[i1++])
    if (arr.length > mid_index) {
      break
    }
  }
  while (i2 < nums2.length) {
    arr.push(nums2[i2++])
    if (arr.length > mid_index) {
      break
    }
  }

  if (total_length % 2 === 1) {
    result = arr[mid_index]
  } else {
    result = (arr[mid_index - 1] + arr[mid_index]) / 2
  }

  return result
};