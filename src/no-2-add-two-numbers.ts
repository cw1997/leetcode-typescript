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
  let p1 = l1
  let p2 = l2

  if (p1 === null && p2 === null) {
    return null
  }
  if (p1 === null) {
    return p2
  }
  if (p2 === null) {
    return p1
  }

  let i = 0
  let carry = 0

  const result: ListNode|null = new ListNode(NaN)
  let p: ListNode|null = result

  while (p1 !== null || p2 !== null) {
    const n1 = p1?.val ?? 0
    const n2 = p2?.val ?? 0
    const bit_sum = n1 + n2 + carry
    if (bit_sum >= 10) {
      p.next = new ListNode(bit_sum - 10)
      carry = 1
    } else {
      p.next = new ListNode(bit_sum)
      carry = 0
    }
    p1 = p1?.next ?? null
    p2 = p2?.next ?? null
    p = p?.next ?? null
  }

  if (p !== null && carry === 1) {
    p.next = new ListNode(1)
  }

  return result.next ?? null
};