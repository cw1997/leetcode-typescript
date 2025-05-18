export function isValid(s: string): boolean {
  const arr: string[] = []
  const chars = s.split("")
  for (const char of chars) {
    switch (char) {
      case "(": {
        arr.push("(")
        break
      }
      case ")": {
        const value = arr.pop()
        if (value !== "(") {
          return false
        }
        break
      }
      case "[": {
        arr.push("[")
        break
      }
      case "]": {
        const value = arr.pop()
        if (value !== "[") {
          return false
        }
        break
      }
      case "{": {
        arr.push("{")
        break
      }
      case "}": {
        const value = arr.pop()
        if (value !== "{") {
          return false
        }
        break
      }
    }
  }
  return arr.length === 0
};