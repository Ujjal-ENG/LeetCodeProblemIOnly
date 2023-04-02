const ps = require("prompt-sync");
const prompt = ps();

var average = function (salary) {
  const max = salary.reduce((a, b) => Math.max(a, b), -Infinity);
  const min = salary.reduce((a, b) => Math.min(a, b), Infinity);
  let sum = 0;
  let count = 0;
  const newArray = salary.map((item) => {
    if (item < max && item > min) {
      sum += item;
      count++;
    }
  });
  const res = parseFloat(sum / count).toFixed(5);
  return res;
};

console.log(average([4000, 3000, 1000, 2000]));
