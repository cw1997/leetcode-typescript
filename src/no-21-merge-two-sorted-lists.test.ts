import { mergeTwoLists, ListNode } from './no-21-merge-two-sorted-lists';

function arrayToList(arr: number[]): ListNode | null {
  const dummy = new ListNode();
  let current = dummy;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

describe('mergeTwoLists', () => {
  test.concurrent.each([
    { l1: [1, 2, 4], l2: [1, 3, 4], expected: [1, 1, 2, 3, 4, 4] },
    { l1: [], l2: [], expected: [] },
    { l1: [], l2: [0], expected: [0] },
    { l1: [5], l2: [1, 2, 3], expected: [1, 2, 3, 5] },
    { l1: [2], l2: [1], expected: [1, 2] },
    { l1: [1, 3, 5], l2: [2, 4, 6], expected: [1, 2, 3, 4, 5, 6] },
  ])(
    'mergeTwoLists(%j, %j) => %j',
    async ({ l1, l2, expected }) => {
      const list1 = arrayToList(l1);
      const list2 = arrayToList(l2);
      const result = mergeTwoLists(list1, list2);
      expect(listToArray(result)).toEqual(expected);
    }
  );
});
