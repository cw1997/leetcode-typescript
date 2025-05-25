import { generate } from './no-118-pascals-triangle';

describe('generate (Pascal\'s Triangle)', () => {
  test.concurrent.each([
    // { input: 1, expected: [[1]] },
    // { input: 2, expected: [[1], [1, 1]] },
    { input: 3, expected: [[1], [1, 1], [1, 2, 1]] },
    { input: 4, expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]] },
    {
      input: 5,
      expected: [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
      ],
    },
    {
      input: 6,
      expected: [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1],
      ],
    },
  ])('generate($input) -> $expected', async ({ input, expected }) => {
    expect(generate(input)).toEqual(expected);
  });
});
