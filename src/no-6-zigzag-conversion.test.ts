import { convert } from './no-6-zigzag-conversion';

describe('Zigzag Conversion', () => {
  test.concurrent.each([
    { input: { s: 'PAYPALISHIRING', numRows: 3 }, expected: 'PAHNAPLSIIGYIR' },
    { input: { s: 'PAYPALISHIRING', numRows: 4 }, expected: 'PINALSIGYAHRPI' },
    { input: { s: 'A', numRows: 1 }, expected: 'A' },
    { input: { s: 'AB', numRows: 1 }, expected: 'AB' },
    { input: { s: 'ABC', numRows: 2 }, expected: 'ACB' },
    { input: { s: 'ABCDE', numRows: 4 }, expected: 'ABCED' },
    { input: { s: 'ABCD', numRows: 2 }, expected: 'ACBD' },
  ])(
    'convert(%j, %d) should return %s',
    async ({ input: { s, numRows }, expected }) => {
      expect(convert(s, numRows)).toBe(expected);
    }
  );
});
