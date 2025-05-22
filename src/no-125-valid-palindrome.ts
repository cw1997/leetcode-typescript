export function isPalindrome(s: string): boolean {
  const chars = s.toLowerCase().split('')
    .filter((item) => /^[A-Za-z0-9]+$/.test(item));
  for (let i = 0; i < chars.length / 2; i++) {
    if (chars[i] !== chars[chars.length - 1 - i]) return false
  }
  return true
};