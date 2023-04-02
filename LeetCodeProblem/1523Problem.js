const ps = require("prompt-sync");
const prompt = ps();

var countOdds = function (low, high) {
  let count = 0;
  if (low >= 0 && high >= 0) {
    for (let i = low; i <= high; i++) {
      if (i % 2 !== 0) {
        count++;
      }
    }
  } else {
    return 0;
  }
  return count;
};

let low = parseInt(prompt("Low: "));
let high = parseInt(prompt("High: "));

const res = countOdds(low, high);
console.log(res)