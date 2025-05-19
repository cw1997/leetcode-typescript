export function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) return nums.length

  let slow = 0, fast = 1
  while (slow < nums.length && fast < nums.length) {
    if (nums[slow] === nums[fast]) {
      fast++
    } else {
      slow++
      nums[slow] = nums[fast]
      fast++
    }
  }

  return slow + 1
};