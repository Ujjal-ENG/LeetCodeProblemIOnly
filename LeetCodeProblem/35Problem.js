var searchInsert = function (nums, target) {
  let array = nums;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
    let temp = target;
    if (array[i] > temp) {
      array[i] = temp;
      return i;
    }
    if (array[array.length - 1] < temp) {
      array[array.length] = target;
    }
  }
  return array;
};

console.log(searchInsert([1, 3, 5, 7], 6));
