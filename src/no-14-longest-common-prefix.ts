export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ""
  if (strs.length === 1) return strs[0]

  const min_len = Math.min(...strs.map((str)=> str.length))

  for (let pos = 0; pos < min_len; pos++) {
    for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i][pos] !== strs[i + 1][pos]) {
        if (pos === 0) return ""
        return strs[i].substring(0, pos)
      }
    }
  }

  return strs[0].substring(0, min_len)
};
