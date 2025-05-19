import { strStr } from './no-28-find-the-index-of-the-first-occurrence-in-a-string';

describe('strStr', () => {
  test.concurrent.each([
    // { haystack: "sadbutsad", needle: "sad", expected: 0 },
    // { haystack: "sadbutsad", needle: "but", expected: 3 },
    // { haystack: "leetcode", needle: "leeto", expected: -1 },
    { haystack: "a", needle: "a", expected: 0 },
    // { haystack: "mississippi", needle: "issip", expected: 4 },
    // { haystack: "mississippi", needle: "issipi", expected: -1 },
    // { haystack: "abc", needle: "", expected: 0 },
    // { haystack: "", needle: "a", expected: -1 },
    // { haystack: "", needle: "", expected: 0 },
  ])(
    'strStr("$haystack", "$needle") should return $expected',
    async ({ haystack, needle, expected }) => {
      expect(strStr(haystack, needle)).toBe(expected);
    }
  );
});
