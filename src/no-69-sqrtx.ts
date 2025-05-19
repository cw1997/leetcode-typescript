export function mySqrt(x: number): number {
  if (x <= 1) return x

  let result = 0

  let left = 0, right = x
  let mid = Math.floor((right - left) / 2) + left
  while (left <= right) {
    mid = Math.floor((right - left) / 2) + left
    const pow = mid * mid
    if (pow <= x) {
      left = mid + 1
      result = mid
    } else if (x < pow) {
      right = mid - 1
    }
  }

  return result
};