import { addTwoNumbers, ListNode } from './no-2-add-two-numbers';

function createList(arr: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(node: ListNode | null): number[] {
  const result: number[] = [];
  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

const cases: {
  name: string;
  l1: number[] | null;
  l2: number[] | null;
  expected: number[];
}[] = [
  {
    name: 'Basic addition: 342 + 465 = 807',
    l1: [2, 4, 3],
    l2: [5, 6, 4],
    expected: [7, 0, 8],
  },
  {
    name: 'Carry over multiple digits: 9999 + 1 = 10000',
    l1: [9, 9, 9, 9],
    l2: [1],
    expected: [0, 0, 0, 0, 1],
  },
  {
    name: 'Unequal length: 42 + 465 = 507',
    l1: [2, 4],
    l2: [5, 6, 4],
    expected: [7, 0, 5],
  },
  {
    name: 'Both null inputs',
    l1: null,
    l2: null,
    expected: [],
  },
  {
    name: 'One null input: [1,2,3] + null',
    l1: [1, 2, 3],
    l2: null,
    expected: [1, 2, 3],
  },
  {
    name: 'One null input: null + [4, 5, 6]',
    l1: null,
    l2: [4, 5, 6],
    expected: [4, 5, 6],
  },
  {
    name: 'Bigint addition: 1000000000000000000000000000001 + 564 = 6640000000000000000000000000001',
    l1: [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    l2: [5,6,4],
    expected: [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  },
];

describe('addTwoNumbers', () => {
  test.concurrent.each(cases)('$name', async ({ l1, l2, expected }) => {
    const list1 = l1 ? createList(l1) : null;
    const list2 = l2 ? createList(l2) : null;
    const result = addTwoNumbers(list1, list2);
    expect(listToArray(result)).toEqual(expected);
  });
});
