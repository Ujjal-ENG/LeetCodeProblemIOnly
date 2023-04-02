var findMedianSortedArrays = function (nums1, nums2) {
  let newArr = [...nums1, ...nums2].sort((a, b) => a - b);
  console.log(newArr);
  if (newArr.length % 2 == 0) {
    let pos = Math.floor(newArr.length / 2);
    return ((newArr[pos] + newArr[pos - 1]) / 2).toFixed(5);
  } else {
    let pos = Math.floor(newArr.length / 2);
    return newArr[pos].toFixed(5);
  }
};
console.log(findMedianSortedArrays([3], [-2, -1]));
