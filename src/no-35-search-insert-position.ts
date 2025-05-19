export function searchInsert(nums: number[], target: number): number {
  let result = nums.length
  let left = 0, right = nums.length - 1

  while (left <= right) {
    const mid = Math.trunc((right - left) / 2) + left
    if (target <= nums[mid]) {
      result = mid
      right = mid - 1
    } else if (target > nums[mid]) {
      left = mid + 1
    }
  }

  return result

};