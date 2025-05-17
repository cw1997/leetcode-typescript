export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0
  }

  let result = 0

  const charSet = new Set<string>()

  let left = 0
  let right = 0

  while (right < s.length) {
    if (!charSet.has(s[right])) {
      charSet.add(s[right])
      result = Math.max(result, right - left + 1)
      right++
    } else {
      charSet.delete(s[left])
      left++
    }
  }

  return result
};