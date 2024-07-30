class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
var removeNthFromEnd = function(head, n) {
    let curr = new ListNode(0);
    curr.next = head;
    let fast = curr;
    let slow = curr;
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return curr.next;

};
//Test Code
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}
let values = [1, 2, 3, 4, 5];
let head = createLinkedList(values);
let n = 2;
let newHead = removeNthFromEnd(head, n);
let current = newHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
//output => 1 2 3 5

