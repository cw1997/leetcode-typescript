export function getRow(numRows: number): number[] {
  const result: number[] = [1]
  const count = numRows + 1

  for (let i = 0; i < count; i++) {
    result[i] = 1
    for (let j = i - 1; j > 0; j--) {
      result[j] = result[j] + result[j - 1]
    }
  }

  return result
};