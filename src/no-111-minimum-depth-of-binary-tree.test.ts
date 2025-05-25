import { TreeNode, minDepth } from './no-111-minimum-depth-of-binary-tree';

// 从层序数组构造二叉树
function buildTree(nodes: (number | null)[]): TreeNode | null {
  if (!nodes.length || nodes[0] === null) return null;

  const root = new TreeNode(nodes[0]!);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (queue.length && i < nodes.length) {
    const node = queue.shift();
    if (node) {
      const left = nodes[i++];
      if (left !== undefined) {
        node.left = left !== null ? new TreeNode(left) : null;
        queue.push(node.left);
      }

      const right = nodes[i++];
      if (right !== undefined) {
        node.right = right !== null ? new TreeNode(right) : null;
        queue.push(node.right);
      }
    }
  }

  return root;
}

describe('minDepth', () => {
  test.concurrent.each([
    { input: [3, 9, 20, null, null, 15, 7], expected: 2 },
    { input: [2, null, 3, null, 4, null, 5, null, 6], expected: 5 },
    { input: [1, 2], expected: 2 },
    { input: [], expected: 0 },
    { input: [1], expected: 1 },
    { input: [1, 2, 3, 4, null, null, null], expected: 2 },
  ])('minDepth($input) => $expected', async ({ input, expected }) => {
    const root = buildTree(input);
    expect(minDepth(root)).toBe(expected);
  });
});
