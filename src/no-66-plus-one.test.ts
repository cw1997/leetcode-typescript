import { plusOne } from './no-66-plus-one';

describe('plusOne', () => {
  test.concurrent.each([
    { input: [1, 2, 3], expected: [1, 2, 4] },
    { input: [4, 3, 2, 1], expected: [4, 3, 2, 2] },
    { input: [0], expected: [1] },
    { input: [9], expected: [1, 0] },
    { input: [9, 9, 9], expected: [1, 0, 0, 0] },
    { input: [1, 9, 9], expected: [2, 0, 0] },
    { input: [2, 9, 9, 9], expected: [3, 0, 0, 0] },
  ])(
    'plusOne(%j) should return %j',
    async ({ input, expected }) => {
      expect(plusOne([...input])).toEqual(expected);
    }
  );
});
