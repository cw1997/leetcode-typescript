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

export function minDepth(root: TreeNode | null): number {
  return get_child_depth(root)
};

function get_child_depth(node: TreeNode | null): number {
  if (node === null) return 0

  if (node.left === null && node.right === null) {
    return 1
  }

  let min = Number.MAX_SAFE_INTEGER
  if (node.left) {
    const depth_left = get_child_depth(node.left)
    min = Math.min(min, depth_left)
  }
  if (node.right) {
    const depth_right = get_child_depth(node.right)
    min = Math.min(min, depth_right)
  }
  return min + 1
}
