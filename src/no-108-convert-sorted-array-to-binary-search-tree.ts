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

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null

  const root: TreeNode = new TreeNode()

  build(root, nums)

  return root
};

function build(node: TreeNode, nums: number[]) {
  const index_left = 0, index_right = nums.length - 1
  const index_mid = Math.trunc((index_right - index_left) / 2)
  const value_mid = nums[index_mid]

  node.val = value_mid

  if (index_left < index_mid) {
    node.left = new TreeNode()
    build(node.left, nums.slice(index_left, index_mid))
  }
  if (index_mid + 1 < index_right + 1) {
    node.right = new TreeNode()
    build(node.right, nums.slice(index_mid + 1, index_right + 1))
  }
}