var singleNumber = function (nums) {
  const ht = {};
  for (let num of nums) {
    console.log(num);
    console.log((ht[num] = ht[num] + 1 || 1));
  }
  console.log(ht);
  for (let key in ht) {
    if (ht[key] === 1) {
      console.log(key);
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
