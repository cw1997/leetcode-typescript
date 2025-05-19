export function removeElement(nums: number[], val: number): number {
  let slow = 0, fast = 0
  while (slow < nums.length && fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast]
    }
    fast++
  }
  return slow
};