import { TreeNode, sortedArrayToBST } from './no-108-convert-sorted-array-to-binary-search-tree';

// 二叉树转换为数组（按中序遍历验证）
function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  const dfs = (node: TreeNode | null) => {
    if (!node) return;
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return result;
}

describe('sortedArrayToBST', () => {
  test.concurrent.each([
    { input: [-10, -3, 0, 5, 9], expected: [-10, -3, 0, 5, 9] },
    { input: [1, 3], expected: [1, 3] },
    { input: [], expected: [] },
    { input: [0], expected: [0] },
    { input: [1, 2, 3, 4, 5, 6, 7], expected: [1, 2, 3, 4, 5, 6, 7] },
  ])('sortedArrayToBST(%j)', async ({ input, expected }) => {
    const tree = sortedArrayToBST(input);
    const inorder = inorderTraversal(tree);
    expect(inorder).toEqual(expected);
  });
});
