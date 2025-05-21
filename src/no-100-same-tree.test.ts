import { TreeNode, isSameTree } from './no-100-same-tree';

// 辅助：根据数组构造二叉树（按层级）
function buildTree(nodes: (number | null)[]): TreeNode | null {
  if (!nodes.length || nodes[0] === null) return null;
  const root = new TreeNode(nodes[0]!);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;
  while (queue.length && i < nodes.length) {
    const current = queue.shift();
    if (current) {
      const left = nodes[i++];
      if (left !== undefined) {
        current.left = left !== null ? new TreeNode(left) : null;
        queue.push(current.left);
      }
      const right = nodes[i++];
      if (right !== undefined) {
        current.right = right !== null ? new TreeNode(right) : null;
        queue.push(current.right);
      }
    }
  }
  return root;
}

describe('isSameTree', () => {
  test.concurrent.each([
    {
      p: [1, 2, 3],
      q: [1, 2, 3],
      expected: true,
    },
    {
      p: [1, 2],
      q: [1, null, 2],
      expected: false,
    },
    {
      p: [1, 2, 1],
      q: [1, 1, 2],
      expected: false,
    },
    {
      p: [],
      q: [],
      expected: true,
    },
    {
      p: [1, null, 2, null, 3],
      q: [1, null, 2, null, 3],
      expected: true,
    },
  ])('isSameTree(%j, %j) => %s', async ({ p, q, expected }) => {
    const treeP = buildTree(p);
    const treeQ = buildTree(q);
    expect(isSameTree(treeP, treeQ)).toBe(expected);
  });
});
