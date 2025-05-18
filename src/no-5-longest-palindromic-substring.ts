export function longestPalindrome(s: string): string {
  if (s.length < 2) return s

  const chars = s.split("")

  const dp: boolean[][] = []
  for (let i = 0; i < s.length; i++) {
    dp[i] = []
    for (let j = 0; j < s.length; j++) {
      dp[i].push(i === j)
    }
  }

  let max_len = 1, max_begin = 0

  for (let len = 2; len <= s.length; len++) {
    for (let begin = 0; begin < s.length; begin++) {
      const end = len + begin - 1
      if (end > s.length) break

      if (chars[begin] !== chars[end]) {
        dp[begin][end] = false
      } else {
        if (end - begin < 3) {
          dp[begin][end] = true
        } else {
          dp[begin][end] = dp[begin + 1][end - 1]
        }
      }

      if (dp[begin][end]) {
        const len = end - begin + 1
        if (len > max_len) {
          max_len = len
          max_begin = begin
        }
      }
    }
  }

  return s.substring(max_begin, max_begin + max_len)
};