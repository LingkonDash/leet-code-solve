function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const l1 = new ListNode(
    1,
    new ListNode(
        0,
        new ListNode(
            0,
            new ListNode(
                0,
                new ListNode(
                    0,
                    new ListNode(
                        0,
                        new ListNode(
                            0,
                            new ListNode(
                                0,
                                new ListNode(
                                    0,
                                    new ListNode(
                                        0,
                                        new ListNode(
                                            0,
                                            new ListNode(
                                                0,
                                                new ListNode(
                                                    0,
                                                    new ListNode(
                                                        0,
                                                        new ListNode(
                                                            0,
                                                            new ListNode(
                                                                0,
                                                                new ListNode(
                                                                    0,
                                                                    new ListNode(
                                                                        0,
                                                                        new ListNode(
                                                                            0,
                                                                            new ListNode(
                                                                                0,
                                                                                new ListNode(
                                                                                    0,
                                                                                    new ListNode(
                                                                                        0,
                                                                                        new ListNode(
                                                                                            0,
                                                                                            new ListNode(
                                                                                                0,
                                                                                                new ListNode(
                                                                                                    0,
                                                                                                    new ListNode(
                                                                                                        0,
                                                                                                        new ListNode(
                                                                                                            0,
                                                                                                            new ListNode(
                                                                                                                0,
                                                                                                                new ListNode(
                                                                                                                    1
                                                                                                                )
                                                                                                            )
                                                                                                        )
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )
);

const l2 = new ListNode(
    5,
    new ListNode(
        6,
        new ListNode(4)
    )
);


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

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

const result = addTwoNumbers(l1, l2)

function printShit(head) {
    const arr = [];

    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }

    console.log(arr);
}

printShit(result);