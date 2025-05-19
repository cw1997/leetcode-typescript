export function strStr(haystack: string, needle: string): number {
  const len = needle.length
  for (let i = 0; i < haystack.length - (len - 1); i++) {
    const substr = haystack.substring(i, i + len)
    if (substr === needle) return i
  }
  return -1
};