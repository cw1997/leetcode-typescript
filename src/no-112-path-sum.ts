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

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  return dfs(root, targetSum, 0)
};

function dfs(node: TreeNode | null, targetSum: number, sum: number): boolean {
  if (node === null) return false

  sum += node.val

  if (node.left === null && node.right === null) {
    return (sum === targetSum)
  }

  if (dfs(node.left, targetSum, sum)) return true
  if (dfs(node.right, targetSum, sum)) return true

  return false
}