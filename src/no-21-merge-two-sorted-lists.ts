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

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null && list2 === null) return null
  if (list1 !== null && list2 === null) return list1
  if (list1 === null && list2 !== null) return list2

  const l = new ListNode()
  let p = l
  let p1 = list1
  let p2 = list2

  while (p1 !== null && p2 !== null) {
    const v1 = p1.val
    const v2 = p2.val
    if (v1 < v2) {
      p.next = new ListNode(v1)
      p1 = p1.next
    } else {
      p.next = new ListNode(v2)
      p2 = p2.next
    }
    p = p.next
  }

  if (p1 !== null) {
    p.next = p1
  }

  if (p2 !== null) {
    p.next = p2
  }

  return l.next
};