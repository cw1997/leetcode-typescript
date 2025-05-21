import { TreeNode, isSymmetric } from './no-101-symmetric-tree';

// 辅助函数：层序数组构造二叉树
function buildTree(nodes: (number | null)[]): TreeNode | null {
  if (!nodes.length || nodes[0] === null) return null;

  const root = new TreeNode(nodes[0]!);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (queue.length && i < nodes.length) {
    const current = queue.shift();
    if (current) {
      const leftVal = nodes[i++];
      if (leftVal !== undefined) {
        current.left = leftVal !== null ? new TreeNode(leftVal) : null;
        queue.push(current.left);
      }

      const rightVal = nodes[i++];
      if (rightVal !== undefined) {
        current.right = rightVal !== null ? new TreeNode(rightVal) : null;
        queue.push(current.right);
      }
    }
  }

  return root;
}

describe('isSymmetric', () => {
  test.concurrent.each([
    {
      input: [1, 2, 2, 3, 4, 4, 3],
      expected: true,
    },
    {
      input: [1, 2, 2, null, 3, null, 3],
      expected: false,
    },
    {
      input: [],
      expected: true,
    },
    {
      input: [1],
      expected: true,
    },
    {
      input: [1, 2, 2, null, 3, 3, null],
      expected: true,
    },
    {
      input: [1, 2, 2, 3, null, null, 3],
      expected: true,
    },
  ])('isSymmetric(%j) => %s', async ({ input, expected }) => {
    const root = buildTree(input);
    expect(isSymmetric(root)).toBe(expected);
  });
});
