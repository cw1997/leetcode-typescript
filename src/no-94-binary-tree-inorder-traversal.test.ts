import { TreeNode, inorderTraversal } from './no-94-binary-tree-inorder-traversal';

// 辅助：根据数组构造二叉树（按层级，null 表示空）
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

describe('inorderTraversal', () => {
  test.concurrent.each([
    { input: [1, null, 2, 3], expected: [1, 3, 2] },
    { input: [], expected: [] },
    { input: [1], expected: [1] },
    { input: [1, 2], expected: [2, 1] },
    { input: [1, null, 2], expected: [1, 2] },
    { input: [1, 2, 3, 4, 5, 6, 7], expected: [4, 2, 5, 1, 6, 3, 7] }
  ])('inorderTraversal($input) should return $expected', async ({ input, expected }) => {
    const tree = buildTree(input);
    expect(inorderTraversal(tree)).toEqual(expected);
  });
});
