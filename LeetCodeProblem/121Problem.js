// solved the problem brute force way
// var maxProfit = function (prices) {
//   let maximumProfit = 0;
//   let buyPrice = prices[0];
//   let noProfit = 0;
//   for (let i = 0; i < prices.length; i++){
//     if (prices[i] > (prices[i + 1] === undefined ? 0 : prices[i + 1])) {
//       noProfit++
//     }
//   }
//   if(noProfit === prices.length) {
//     return 0
//   }
//   for (let i = 1; i < prices.length; i++){
//     if (prices[i] < buyPrice) {
//       buyPrice = prices[i]
//     }
//     else {
//      maximumProfit = Math.max(prices[i]-buyPrice,maximumProfit)
//     }
//   }

//   return maximumProfit
// };

// solved this problem optimal way
var maxProfit = function (prices) {
  let buyPrice = Infinity;
  let maxPrice = 0;
  for (let i = 0; i < prices.length; i++) { 
    if (prices[i] < buyPrice) {
      buyPrice = prices[i]
    }
    else if (prices[i] - buyPrice > maxPrice) {
      maxPrice = prices[i]-buyPrice
    }
  }
  return maxPrice
}
console.log(maxProfit([7,1,5,3,6,4]))