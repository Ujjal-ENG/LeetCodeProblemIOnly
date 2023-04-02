var search = function (nums, target) {
  if (nums.includes(target)) {
    let index = nums.indexOf(target);
    return index;
  }
  return -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
