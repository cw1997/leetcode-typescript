import { hasPathSum, TreeNode } from './no-112-path-sum';

// 层序构建树的工具函数
function buildTree(nodes: (number | null)[]): TreeNode | null {
  if (!nodes.length || nodes[0] == null) return null;
  const root = new TreeNode(nodes[0]!);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;
  while (queue.length && i < nodes.length) {
    const node = queue.shift();
    if (node) {
      const leftVal = nodes[i++];
      if (leftVal !== undefined) {
        node.left = leftVal != null ? new TreeNode(leftVal) : null;
        queue.push(node.left);
      }
      const rightVal = nodes[i++];
      if (rightVal !== undefined) {
        node.right = rightVal != null ? new TreeNode(rightVal) : null;
        queue.push(node.right);
      }
    }
  }
  return root;
}

describe('hasPathSum', () => {
  test.concurrent.each([
    {
      tree: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1],
      sum: 22,
      expected: true,
    },
    {
      tree: [1, 2, 3],
      sum: 5,
      expected: false,
    },
    {
      tree: [1, 2],
      sum: 0,
      expected: false,
    },
    {
      tree: [1],
      sum: 1,
      expected: true,
    },
    {
      tree: [],
      sum: 0,
      expected: false,
    },
    {
      tree: [-2, null, -3],
      sum: -5,
      expected: true,
    },
    {
      tree: [0, 1, 1],
      sum: 1,
      expected: true,
    },
    {
      tree: [1, -2, -3, 1, 3, -2, null, -1],
      sum: -1,
      expected: true,
    },
  ])(
    'hasPathSum(tree: $tree, sum: $sum) should return $expected',
    async ({ tree, sum, expected }) => {
      const root = buildTree(tree);
      expect(hasPathSum(root, sum)).toBe(expected);
    }
  );
});
