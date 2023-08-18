// Problem: Write a function to reverse a singly linked list in-place. 
// Implement both an iterative and a recursive solution.

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Helper function to print linked list
function printLinkedList(head) {
    let current = head;
    while (current) {
        process.stdout.write(current.val + " -> ");
        current = current.next;
    }
    console.log("null");
}

// Example usage
// Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
const nodes = Array.from({ length: 5 }, (_, i) => new ListNode(i + 1));
for (let i = 0; i < 4; i++) {
    nodes[i].next = nodes[i + 1];
}
const head = nodes[0];

console.log("Original linked list:");
printLinkedList(head);

// Solution: Reverse using Iterative



// Solution: Reverse using Recursive