export function myAtoi(s: string): number {
  let result = 0

  const chars = s.split("")

  let i = 0
  let is_negative = false

  while (chars[i] === " ") i++

  if (chars[i] === "-") {
    is_negative = true
    i++
  } else if (chars[i] === "+") {
    is_negative = false
    i++
  } else {
    is_negative = false
  }

  while (chars[i] === "0") i++

  while (i < s.length) {
    const c = chars[i]
    if (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57) {
      result = result * 10 + (+c)
      i++
    } else {
      break
    }
  }

  if (is_negative) {
    result = -result
  }
  
  if (result > 2147483647) return 2147483647
  if (result < -2147483648) return -2147483648

  return result
};