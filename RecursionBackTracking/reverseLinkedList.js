// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000


//Iterative Solution
var reverseList = function(head) {
  let previous = null;
  while (head) {
    let next = head.next;
    head.next = previous;
    previous = head;
    head = next;
  }
  return previous
};


//recursive Solution
var reverseList = function(head) {
  //base case
  if (!head || !head.next) {
    return head
  }

  //recursive case
  let newHead = reverseList(head.next)
  head.next.next = head;
  head.next = null;
  return newHead
};

const list = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}};
// expected {val: 5, next: {val: 4, next: {val: 3, next: {val: 2, next: {val: 1, next: null}}}}};
console.log(reverseList(list))