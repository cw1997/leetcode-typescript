import { isBalanced, TreeNode } from './no-110-balanced-binary-tree';

// 构建树工具函数（层序）
function buildTree(nodes: (number | null)[]): TreeNode | null {
  if (!nodes.length || nodes[0] == null) return null;
  const root = new TreeNode(nodes[0]!);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;
  while (queue.length && i < nodes.length) {
    const node = queue.shift();
    if (node) {
      const left = nodes[i++];
      if (left !== undefined) {
        node.left = left != null ? new TreeNode(left) : null;
        queue.push(node.left);
      }
      const right = nodes[i++];
      if (right !== undefined) {
        node.right = right != null ? new TreeNode(right) : null;
        queue.push(node.right);
      }
    }
  }
  return root;
}

describe('isBalanced', () => {
  test.concurrent.each([
    { tree: [], expected: true },
    { tree: [1, 2, 2, 3, 3, null, null, 4, 4], expected: false },
    { tree: [3, 9, 20, null, null, 15, 7], expected: true },
    { tree: [1, 2, 2, 3, null, null, 3, 4, null, null, 4], expected: false },
    { tree: [1], expected: true },
    { tree: [1, 2, 2, 3, null, null, 3], expected: true },
    { tree: [1, 2, null, 3, null, 4], expected: false }, // 一条链
    { tree: [1, null, 2, null, 3], expected: false },
  ])('isBalanced($tree) -> $expected', async ({ tree, expected }) => {
    const root = buildTree(tree);
    expect(isBalanced(root)).toBe(expected);
  });
});
