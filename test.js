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
}