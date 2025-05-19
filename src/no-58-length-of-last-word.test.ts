import { lengthOfLastWord } from './no-58-length-of-last-word';

describe('lengthOfLastWord', () => {
  test.concurrent.each([
    { input: "Hello World", expected: 5 },
    { input: "   fly me   to   the moon  ", expected: 4 },
    { input: "luffy is still joyboy", expected: 6 },
    { input: "a", expected: 1 },
    { input: "day", expected: 3 },
    { input: "   space   ", expected: 5 },
    { input: "    ", expected: 0 },
    { input: "", expected: 0 },
    { input: " b ", expected: 1 },
  ])(
    'lengthOfLastWord("%s") should return %i',
    async ({ input, expected }) => {
      expect(lengthOfLastWord(input)).toBe(expected);
    }
  );
});
