/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // Finding the number of nodes and the last node
    let temp = head;
    let n = 0;
    let lastNode;
    while(temp != null) {
        lastNode = temp;
        temp = temp.next;
        n++;
    }

    // If count of nodes is <= 1, return head
    if(n <= 1) {
        return head;
    }

    // Reduce k by modulo of n
    k = k % n;
    if(k == 0) {
        return head;
    }

    // Navigate to the  
    let count = n-k-1;
    temp = head;
    while(count--) {
        temp = temp.next;
    }

    // Point (n-k)th node to null and the head to (n-k+1)th node
    let newHead = temp.next;
    temp.next = null;

    // Point the lastNode to the original head
    lastNode.next = head;

    return newHead;
    
};