var canMakeArithmeticProgression = function (arr) {
  console.log(arr.sort((a, b) => a - b));
  let diff = null;
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i] - arr[i - 1];
    console.log(current);
    if (diff === null) {
      diff = current;
      console.log(diff);
    } else if (current !== diff) {
      return false;
    }
    console.log(diff);
    
  }
  return true;
};

const res = canMakeArithmeticProgression([2,5,1]);
console.log(res);
