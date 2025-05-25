import { TreeNode, postorderTraversal } from './no-145-binary-tree-postorder-traversal';

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

describe('postorderTraversal (Binary Tree Postorder)', () => {
  test.concurrent.each([
    { input: [], expected: [] },
    { input: [1], expected: [1] },
    { input: [1, null, 2, 3], expected: [3, 2, 1] }, // right-heavy tree
    { input: [3, 1, 2], expected: [1, 2, 3] },       // balanced tree
    { input: [1, 2, 3, 4, 5], expected: [4, 5, 2, 3, 1] },
    { input: [1, null, 2, null, 3], expected: [3, 2, 1] },
  ])('postorderTraversal($input) -> $expected', async ({ input, expected }) => {
    const tree = buildTree(input);
    expect(postorderTraversal(tree)).toEqual(expected);
  });
});
