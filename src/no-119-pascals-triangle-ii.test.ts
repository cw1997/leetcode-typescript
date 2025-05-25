import { getRow } from './no-119-pascals-triangle-ii';

describe('getRow (Pascal\'s Triangle II)', () => {
  test.concurrent.each([
    { input: 0, expected: [1] },
    { input: 1, expected: [1, 1] },
    { input: 2, expected: [1, 2, 1] },
    { input: 3, expected: [1, 3, 3, 1] },
    { input: 4, expected: [1, 4, 6, 4, 1] },
    { input: 5, expected: [1, 5, 10, 10, 5, 1] },
    { input: 6, expected: [1, 6, 15, 20, 15, 6, 1] },
    { input: 10, expected: [1,10,45,120,210,252,210,120,45,10,1] },
  ])('getRow($input) -> $expected', async ({ input, expected }) => {
    expect(getRow(input)).toEqual(expected);
  });
});
