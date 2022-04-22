// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:

// Input: head = [1], n = 1
// Output: []

// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

var removeNthFromEnd = function(head, n) {
  let left = head;
  let right = head;

  for (var i = 0; i < n; i++) {
    right = right.next;
  }

  //edge case if length of list is equal to n or length of 1
  if (!right) {
    return head.next
  }

  while (right && right.next) {
    left = left.next;
    right = right.next;
  }

  //deletes the nth node
  left.next = left.next.next;

  return head
};