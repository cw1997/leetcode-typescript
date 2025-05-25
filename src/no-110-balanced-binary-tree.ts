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

export function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true
  return dfs(root)
};

function dfs(node: TreeNode | null): boolean {
  if (node === null) return true
  const depth_left = get_depth(node.left, 0)
  const depth_right = get_depth(node.right, 0)
  if (Math.abs(depth_right - depth_left) > 1) return false
  return dfs(node.left) && dfs(node.right)
}

function get_depth(node: TreeNode | null, depth: number): number {
  if (node === null) return depth
  depth++
  const depth_left = get_depth(node.left, depth)
  const depth_right = get_depth(node.right, depth)
  return Math.max(depth_left, depth_right)
}