var isHappy = function (n) {
  let temp = n;
 
  const getNum = (x) =>
    x
      .toString()
      .split("")
      .reduce((prev, curr) => prev + Number(curr) * Number(curr), 0);
  let start = getNum(temp);
  let count = start.length;
  console.log(count);
  let end = getNum(start);
  if (start <= 1) {
    return true;
  } else {
    while (start !== end) {
      if (end === 1) {
        return true;
      } else {
        start = getNum(end);
        end = getNum(end);
        end = getNum(end);
      }

      return end === 1;
    }
  }
};

const res = isHappy(1);
console.log(res);

// const num = [1, 2, 3, 4, 5, 6];
// let sum = 0
// const res = num.reduce((prev, curr) => {
//   return prev+curr
// }, 0);
// console.log(res);
