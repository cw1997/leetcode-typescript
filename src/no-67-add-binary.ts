export function addBinary(a: string, b: string): string {
  const a1 = a.split("").map(i => +i).reverse()
  const a2 = b.split("").map(i => +i).reverse()
  const result: number[] = []

  let i = 0
  let carry = 0
  while (i < a1.length && i < a2.length) {
    const sum = a1[i] + a2[i] + carry
    if (sum >= 2) {
      result[i] = sum - 2
      carry = 1
    } else {
      result[i] = sum
      carry = 0
    }
    ++i
  }

  while (i < a1.length) {
    const sum = a1[i] + carry
    if (sum >= 2) {
      result[i] = sum - 2
      carry = 1
    } else {
      result[i] = sum
      carry = 0
    }
    ++i
  }

  while (i < a2.length) {
    const sum = a2[i] + carry
    if (sum >= 2) {
      result[i] = sum - 2
      carry = 1
    } else {
      result[i] = sum
      carry = 0
    }
    ++i
  }

  if (carry === 1) result.push(1)

  return result.reverse().join("")
};