var majorityElement = function (nums) {
  // const ht = {};
  // for (num of nums) {
  //   ht[num] = ht[num] + 1 || 1;
  // }
  // let max = 0;
  // let maxKey = "";

  // for (let char in ht) {
  //   if (ht[char] > max) {
  //     max = ht[char];
  //     maxKey = char;
  //   }
  // }
  // return maxKey
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
};

console.log(majorityElement([3, 2, 3]));
