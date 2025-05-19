export function plusOne(digits: number[]): number[] {
  let carry = 0
  digits[digits.length - 1] += 1
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry
    if (sum >= 10) {
      digits[i] = sum - 10
      carry = 1
    } else {
      digits[i] = sum
      carry = 0
    }
  }
  if (carry === 1) {
    digits.unshift(1)
  }
  return digits
};