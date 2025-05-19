export function lengthOfLastWord(s: string): number {
  let begin = 0, end = s.length - 1
  let i = s.length - 1

  while (s.charAt(i) === " ") i--
  end = i

  while (i >= 0 && s.charAt(i) !== " ") i--
  begin = i

  return end - begin
};