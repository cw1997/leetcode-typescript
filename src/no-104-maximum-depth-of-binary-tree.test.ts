import { TreeNode, maxDepth } from './no-104-maximum-depth-of-binary-tree';

// 辅助：从数组构造树（层序遍历）
function buildTree(nodes: (number | null)[]): TreeNode | null {
  if (!nodes.length || nodes[0] === null) return null;

  const root = new TreeNode(nodes[0]!);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (queue.length && i < nodes.length) {
    const node = queue.shift();
    if (node) {
      const leftVal = nodes[i++];
      if (leftVal !== undefined) {
        node.left = leftVal !== null ? new TreeNode(leftVal) : null;
        queue.push(node.left);
      }

      const rightVal = nodes[i++];
      if (rightVal !== undefined) {
        node.right = rightVal !== null ? new TreeNode(rightVal) : null;
        queue.push(node.right);
      }
    }
  }

  return root;
}

describe('maxDepth', () => {
  test.concurrent.each([
    { input: [3, 9, 20, null, null, 15, 7], expected: 3 },
    { input: [1, null, 2], expected: 2 },
    { input: [], expected: 0 },
    { input: [0], expected: 1 },
    { input: [1, 2, 2, 3, null, null, 3, 4, null, null, 4], expected: 4 }
  ])('maxDepth(%j) => %i', async ({ input, expected }) => {
    const root = buildTree(input);
    expect(maxDepth(root)).toBe(expected);
  });
});
