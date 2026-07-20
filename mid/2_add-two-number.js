function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// l1: [9,9,9,9,9,9,9]
const l1 = new ListNode(
    9,
    new ListNode(
        9,
        new ListNode(
            9,
            new ListNode(
                9,
                new ListNode(
                    9,
                    new ListNode(
                        9,
                        new ListNode(9)
                    )
                )
            )
        )
    )
);

// l2: [9,9,9,9]
const l2 = new ListNode(
    9,
    new ListNode(
        9,
        new ListNode(
            9,
            new ListNode(9)
        )
    )
);
// first approach

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbersFIRSTapproach = function(l1, l2) {
    let num1 = "";
    let num2 = "";

    let l1Current = l1;
    let l2Current = l2;

    let i = 0

    while (l1Current || l2Current) {

        if (l1Current) {
            num1 = `${l1Current.val}${num1}`
            l1Current = l1Current.next
        }
        if (l2Current) {
            num2 = `${l2Current.val}${num2}`
            l2Current = l2Current.next
        }

    }

    const sum = (Number(num1) + Number(num2)).toString().split('');
    
    const head = { val: 'dummy', next: null }
    let current = head

    for (let i = sum.length - 1; i >= 0; i--) {
        current.next = new ListNode(Number(sum[i]))
        current = current.next;
    }

    return head.next;
};

// second approach

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let currentL1 = l1;
    let currentL2 = l2;
    let rest = 0;
    let head = {val: 'dummy', next: null}
    const result = head
    while (currentL1 || currentL2 || rest !== 0) {

        if(!currentL1 && !currentL2) {
            head.next = new ListNode(rest);
            break;
        }
        
        let sum = currentL1 && currentL2 ? currentL1.val + currentL2.val : currentL1 ? currentL1.val : currentL2.val;
        
        if(rest !== 0) sum = sum + rest;
        
        if(sum > 9) {
            
            rest = Number(`${sum}`[0])
            sum = Number(`${sum}`[1])
        } else rest = 0;
        
        if(!currentL1) {
            head.next = new ListNode(sum, null)
            head = head.next
            currentL2 = currentL2.next
            continue;
        }

        if(!currentL2) {
            head.next = new ListNode(sum, null)
            head = head.next
            currentL1 = currentL1.next;
            continue;
        }

        head.next = new ListNode(sum, null)
        head = head.next
        currentL1 = currentL1.next;
        currentL2 = currentL2.next;
    }
    return result.next

};

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

const result = addTwoNumbers(l1, l2)

// just to make the output more readable, it will print the linked list as an array
function printShit(head) {
    const arr = [];

    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }

    console.log(arr);
}

printShit(result);