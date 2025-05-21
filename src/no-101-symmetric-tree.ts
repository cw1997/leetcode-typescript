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


export function isSymmetric(root: TreeNode | null): boolean {
  return _is_symmetric(root?.left ?? null, root?.right ?? null)
};

function _is_symmetric(t1: TreeNode | null, t2: TreeNode | null): boolean {
  if (t1 === null && t2 === null) return true
  if (t1?.val !== t2?.val) return false
  return _is_symmetric(t1?.left ?? null, t2?.right ?? null) && _is_symmetric(t2?.left ?? null, t1?.right ?? null)
}