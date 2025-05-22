export function singleNumber(nums: number[]): number {
  return nums.reduce((prev, curr) => prev ^ curr, 0);
};
