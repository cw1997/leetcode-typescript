export function twoSum(nums: number[], target: number): number[] {
  const set = new Set<number>()
  for (const num of nums) {
    set.add(num)
  }
  const result: number[] = []
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (set.has(complement) && nums.indexOf(complement) !== i) {
      result.push(i)
      result.push(nums.indexOf(complement))
      break
    }
  }
  return result
};