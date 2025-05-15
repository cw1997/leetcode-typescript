/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const s1: number[] = []
  const s2: number[] = []
  for (let i = l1; i !== null; i = i.next) {
    s1.unshift(i.val)
  }
  for (let i = l2; i !== null; i = i.next) {
    s2.unshift(i.val)
  }
  if (s1.length === 0 && s2.length === 0) {
    return null
  }

  const sum = (+s1.join('')) + (+s2.join(''))
  const sum_arr = sum.toString().split('').map((value) => +value)

  const result = new ListNode()
  let current = result
  for (let i = sum_arr.length - 1; i >= 0; i--) {
    if (i === sum_arr.length - 1) {
      current.val = sum_arr[i]
    } else {
      current.next = new ListNode(sum_arr[i])
      current = current.next
    }
  }
  return result
};