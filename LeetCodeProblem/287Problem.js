var findDuplicate = function (nums) {
  const ht = {};
  for (num of nums) {
    ht[num] = ht[num] + 1 || 1;
  }

  for (k in ht) {
    if (ht[k] !== 1) {
      return k;
    }
  }
};
console.log(findDuplicate([3,1,3,4,2]));