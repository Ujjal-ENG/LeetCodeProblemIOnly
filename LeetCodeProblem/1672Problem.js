var maximumWealth = function (accounts) {
  return Math.max(
    ...accounts.map((account) => account.reduce((prev, curr) => prev + curr), 0)
  );
};
console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);