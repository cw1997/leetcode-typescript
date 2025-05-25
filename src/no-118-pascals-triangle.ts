export function generate(numRows: number): number[][] {
  const result: number[][] = []

  for (let i = 0; i < numRows; i++) {
    const count = i + 1
    result[i] = []
    for (let j = 0; j < count; j++) {
      if (j === 0 || j === count - 1) result[i][j] = 1
      else result[i][j] = 0
    }
  }

  for (let i = 1; i < numRows; i++) {
    for (let j = 1; j < result[i].length - 1; j++) {
      result[i][j] = result[i-1][j-1] + result[i-1][j]
    }
  }

  return result
};