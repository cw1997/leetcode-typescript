import { addBinary } from './no-67-add-binary';

describe('addBinary', () => {
  test.concurrent.each([
    { a: "11", b: "1", expected: "100" },
    { a: "1010", b: "1011", expected: "10101" },
    { a: "0", b: "0", expected: "0" },
    { a: "1", b: "0", expected: "1" },
    { a: "1111", b: "1111", expected: "11110" },
    { a: "100", b: "110010", expected: "110110" },
    { a: "0", b: "1", expected: "1" },
  ])(
    'addBinary("%s", "%s") should return "%s"',
    async ({ a, b, expected }) => {
      expect(addBinary(a, b)).toBe(expected);
    }
  );
});
