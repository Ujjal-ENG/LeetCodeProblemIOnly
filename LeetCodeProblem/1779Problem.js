var nearestValidPoint = function (x, y, points) {
  let min = Infinity;
  let mIdx = -1;

  const calculateDist = (p1, p2) =>
    Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
  const validInxPoin = points
    .map((point, idx) => [point, idx])
    .filter(([[px, py]]) => px === x || py === y);

  for (let i = 0; i < validInxPoin.length; i++) {
    const manhatDist = calculateDist(validInxPoin[i][0], [x, y]);
    if (manhatDist < min) {
      min = manhatDist;
      mIdx = validInxPoin[i][1];
    }
  }
  return mIdx;
};

const res = nearestValidPoint(3, 4, [
  [1, 2],
  [3, 1],
  [2, 4],
  [2, 3],
  [4, 4],
]);
console.log(res)