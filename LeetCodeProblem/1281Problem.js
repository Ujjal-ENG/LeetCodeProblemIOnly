var subtractProductAndSum = function (n) {
  let temp = n;
  let last, div1;
  let sum = 0;
  let mul = 1;
  while (temp !== 0) {
    last = temp % 10;
    div1 = parseInt(temp / 10);
    temp = div1;
    sum += last;
    mul *= last;
  }
  let res = mul - sum;
  return res;
};

const res = subtractProductAndSum(4421);
