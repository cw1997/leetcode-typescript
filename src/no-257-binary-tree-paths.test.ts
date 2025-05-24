import { binaryTreePaths, TreeNode } from './no-257-binary-tree-paths';

// 辅助函数：根据数组构建二叉树（层序）
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

describe('binaryTreePaths', () => {
  test.concurrent.each([
    {
      input: [1, 2, 3, null, 5],
      expected: ['1->2->5', '1->3'],
    },
    {
      input: [1],
      expected: ['1'],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [1, 2, null, 3],
      expected: ['1->2->3'],
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7],
      expected: ['1->2->4', '1->2->5', '1->3->6', '1->3->7'],
    },
    {
      input: [5, 4, null, 3, null, 2, null, 1],
      expected: ['5->4->3->2->1'],
    },
    {
      input: [0, -3, 9, -10, null, 5],
      expected: ['0->-3->-10', '0->9->5'],
    },
    {
      input: [10, 5, 15, null, null, 12, 20],
      expected: ['10->5', '10->15->12', '10->15->20'],
    },
  ])('binaryTreePaths(%j) => %j', async ({ input, expected }) => {
    const root = buildTree(input);
    const result = binaryTreePaths(root);
    expect(result.sort()).toEqual(expected.sort());
  });

});
