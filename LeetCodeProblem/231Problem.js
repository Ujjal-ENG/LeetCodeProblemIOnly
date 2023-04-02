var isPowerOfTwo = function (n) {
  // let temp = n;
  // let mathPow;
  // for (let i = 0; i < temp; i++) {
  //   mathPow = Math.pow(2, i);
  //   if (mathPow === n) {
  //     return true;
  //   }
  // }
  // return false

  const num = Number.isInteger(Math.log2(n))
  return num
};

console.log(isPowerOfTwo(3));
