var sortedSquares = function (nums) {
  let powerArr = [];
  for (let i of nums) {
    powerArr.push(Math.pow(Math.abs(i), 2));
  }
  return powerArr.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
