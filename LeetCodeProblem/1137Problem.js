var tribonacci = function (n) {
  if (n === 0) return 0;
  if (n < 3) return 1;
  let t0 = 0;
  let t1 = 1;
  let t2 = 1;
  for (let t = 3; t <= n; t++) {
    const tn = t0 + t1 + t2;
    t0 = t1;
    t1 = t2;
    t2 = tn;
  }
  return t2;
  // return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

console.log(tribonacci(25));
