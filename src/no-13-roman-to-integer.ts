export function romanToInt(s: string): number {
  let result = 0

  const chars = s.split("")
  for (let i = 0; i < chars.length; i++) {
    if (i < chars.length - 1 && chars[i] === "I" && chars[i + 1] === "V") {
      result += 4
      ++i
    } else if (i < chars.length - 1 && chars[i] === "I" && chars[i + 1] === "X") {
      result += 9
      ++i
    } else if (i < chars.length - 1 && chars[i] === "X" && chars[i + 1] === "L") {
      result += 40
      ++i
    } else if (i < chars.length - 1 && chars[i] === "X" && chars[i + 1] === "C") {
      result += 90
      ++i
    } else if (i < chars.length - 1 && chars[i] === "C" && chars[i + 1] === "D") {
      result += 400
      ++i
    } else if (i < chars.length - 1 && chars[i] === "C" && chars[i + 1] === "M") {
      result += 900
      ++i
    } else {
      // @ts-ignore
      if (map[chars[i]]) result += map[chars[i]]
    }
  }

  return result
};

const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

