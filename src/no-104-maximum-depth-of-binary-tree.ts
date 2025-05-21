/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

export function maxDepth(root: TreeNode | null): number {
  return f(0, root)
};

function f(depth: number, node: TreeNode | null): number {
  if (!node) {
    return depth
  } else {
    const depth_left = f(depth + 1, node.left)
    const depth_right = f(depth + 1, node.right)
    return Math.max(depth_left, depth_right)
  }
}