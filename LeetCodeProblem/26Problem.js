var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i + 1] === nums[i]) {
      nums.splice(i + 1, 1)
    }
  }
  return nums.length
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
