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

  let max_len = 1, max_l = 0

  for (let r = 0; r < s.length; r++) {
    for (let l = 1; l < r; l++) {
      if (chars[l] !== chars[r]) {
        dp[l][r] = false
      } else {
        if (r - l < 3) {
          dp[l][r] = chars[l] === chars[r]
        } else {
          dp[l][r] = dp[l + 1][r - 1]
        }
      }

      if (dp[l][r]) {
        max_len = Math.max(max_len, r - l + 1)
        max_l = l
      }
    }
  }

  return s.substring(max_l, max_l + max_len)
};