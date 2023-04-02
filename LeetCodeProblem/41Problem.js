var firstMissingPositive = function (nums) {
  const map = {};
  nums.forEach((e) => (map[e] = e));
  
  for (let i = 1; true; i++) {
    if (!map[i]) {
      return i;
    }
  }
};
console.log(firstMissingPositive([3, 4, -1, 1]));
