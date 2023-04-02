var search = function (nums, target) {
  let left = 0;
  let right = nums.length;
  while (left <= right) {
    let mid = Math.round((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
