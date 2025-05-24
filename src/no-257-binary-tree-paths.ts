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

export function binaryTreePaths(root: TreeNode | null): string[] {
  const result = dfs(root, [], [])
  return result
};

function dfs(node: TreeNode | null, path: number[], result: string[]): string[] {
  if (node === null) return result

  path.push(node.val)

  dfs(node.left, [...path], result)
  dfs(node.right, [...path], result)

  if (node.left === null && node.right === null) {
    result.push(path.join("->"))
  }
  return result
}