function canPay(arrs,price) {
  let sum = 0;
  for (let i = 0; i < arrs.length; i++){
    sum += arrs[i]
  }
  if (sum >= price) {
    return true
  }
  return false
}

console.log(canPay([1,5,5],10))