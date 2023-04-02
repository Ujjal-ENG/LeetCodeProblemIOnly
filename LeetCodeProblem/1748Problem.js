var sumOfUnique = function (nums) {
  const ht = {};
  for (let i of nums) {
    ht[i] = ht[i] + 1 || 1;
  }
  let sum = 0;
  for (i in ht) {
    if (ht[i] === 1) {
      sum += Number(i);
    }
  }
  return sum;
};
console.log(sumOfUnique([1, 2, 3, 2]));
