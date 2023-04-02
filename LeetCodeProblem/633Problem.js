const judgeSquareSum = function (c) {
  const isSquare = (x) => {
    const num = Math.sqrt(x);
    return Math.floor(num) === num;
  };
  console.log(isSquare());
  for (let i = 0; i <= Math.sqrt(c); i++) {
    if (isSquare(c - i * i)) {
      return true;
    }
  }
  return false;
};
console.log(judgeSquareSum(4));
