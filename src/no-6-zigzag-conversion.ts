export function convert(s: string, numRows: number): string {
  if (numRows <= 1) return s

  const rows: string[] = []
  for (let i = 0; i < numRows; i++) {
    rows[i] = ""
  }

  const chars = s.split("")
  let i = 0
  let flag = 1
  for (const char of chars) {
    rows[i] += char
    if (i === numRows - 1) {
      flag = -1
    } else if (i === 0) {
      flag = 1
    }
    i += flag
  }

  return rows.join("");
};