var maxProfit = function (prices) {
  let maximumProfit = 0;
  let count = 0;
  for (let i = 0; i < prices.length; i++){
    if (prices[i] > (prices[i + 1] === undefined ? 0 : prices[i + 1])) {
      count++
    }
  }
  if (count === prices.length) {
    return 0
  }
  return 1
};

console.log(maxProfit([7,6,4,3,1]))