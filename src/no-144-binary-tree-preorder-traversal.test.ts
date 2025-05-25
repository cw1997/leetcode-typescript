import { TreeNode, preorderTraversal } from './no-144-binary-tree-preorder-traversal';

function buildTree(values: (number | null)[]): TreeNode | null {
  if (!values.length || values[0] == null) return null;

  const root = new TreeNode(values[0]);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (i < values.length) {
    const node = queue.shift();
    if (node) {
      const leftVal = values[i++];
      const rightVal = values[i++];
      if (leftVal != null) {
        node.left = new TreeNode(leftVal);
        queue.push(node.left);
      }
      if (rightVal != null) {
        node.right = new TreeNode(rightVal);
        queue.push(node.right);
      }
    }
  }

  return root;
}

describe('preorderTraversal (Binary Tree Preorder)', () => {
  test.concurrent.each([
    { input: [], expected: [] },
    { input: [1], expected: [1] },
    { input: [1, null, 2, 3], expected: [1, 2, 3] },
    { input: [3, 1, 2], expected: [3, 1, 2] },
    { input: [1, 2, 3, 4, 5], expected: [1, 2, 4, 5, 3] },
    { input: [1, null, 2, null, 3], expected: [1, 2, 3] },
  ])('preorderTraversal($input) -> $expected', async ({ input, expected }) => {
    const tree = buildTree(input);
    expect(preorderTraversal(tree)).toEqual(expected);
  });
});
