var missingNumber = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return nums.length;
};
console.log(missingNumber([0, 1, 3]));
