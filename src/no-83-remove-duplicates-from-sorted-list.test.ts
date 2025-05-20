import { deleteDuplicates, ListNode } from './no-83-remove-duplicates-from-sorted-list';

// 辅助函数：数组转链表
function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// 辅助函数：链表转数组
function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

describe('deleteDuplicates', () => {
  test.concurrent.each([
    { input: [1, 1, 2], expected: [1, 2] },
    { input: [1, 1, 2, 3, 3], expected: [1, 2, 3] },
    { input: [], expected: [] },
    { input: [1], expected: [1] },
    { input: [1, 1, 1, 1], expected: [1] },
    { input: [1, 2, 3], expected: [1, 2, 3] },
  ])(
    'deleteDuplicates(%j) should return %j',
    async ({ input, expected }) => {
      const head = arrayToList(input);
      const result = deleteDuplicates(head);
      expect(listToArray(result)).toEqual(expected);
    }
  );
});
