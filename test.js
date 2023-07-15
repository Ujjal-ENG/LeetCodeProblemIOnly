var kthFactor = function(n, k) {
  let result = [];
  for (let i = 1; i <= n; i++){
    if (n % i === 0) {
      result.push(i)
    }
  }
  if (result.length < k) {
    return -1
  }
  return result[k-1]
};

console.log(kthFactor(7,2))