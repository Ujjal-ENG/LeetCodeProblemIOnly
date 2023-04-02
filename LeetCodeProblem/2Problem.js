const addTwoNumbers = (l1, l2) => {
  let p1 = l1,
    p2 = l2;
  (num1 = 0),
    (num2 = 0),
    (carry = 0),
    (solution = new ListNode(0)),
    (current = solution);
  while (p1 || p2) {
    num1 = p1 ? p1.val : 0;
    num2 = p2 ? p2.val : 0;

    if (num1 + num2 + carry > 9) {
      carry = 1;
    } else {
      carry = 0;
    }
    if(p1) p1 = p1.next();
  }
};
