export function majorityElement(nums: number[]): number {
  const sorted = nums.sort()
  return sorted[Math.floor(nums.length / 2)]
};