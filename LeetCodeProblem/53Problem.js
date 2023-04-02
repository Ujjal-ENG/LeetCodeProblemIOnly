// var maxSubArray = function (nums) {
//   let currentSum = nums[0];
//   let maxSum = nums[0];
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   for (let i = 0; i < nums.length; i++) {
//     currentSum = Math.max(currentSum + nums[i], nums[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }
//   return maxSum;
// };
// var maxSubArray = function (nums) {
//   const ht = {};
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   for (let i of nums) {
//     ht[i] = ht[i] + 1 || 1;
//   }
//   let newArray = [];
//   let minArray = [];
//   for (let i in ht) {
//     if (Number(i) > 0) {
//       newArray.push(Number(i));
//     } else {
//       minArray.push(Number(i));
//     }
//   }
//   newArray.push(Math.max(...minArray));

//   const sum = newArray.reduce((ps, cs) => {
//     if (ps + cs <= 0) {
//       if (ps > 0) return ps;
//       else return cs;
//     }
//     return ps + cs;
//   }, 0);
//   return sum;
// };
var maxSubArray = function (nums) {
  let maxNumber = nums[0];
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];

    if (temp > maxNumber) {
      maxNumber = temp;
    }
    if (temp < 0) {
      temp = 0;
    }
  }
  return maxNumber;
};
