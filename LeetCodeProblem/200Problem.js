var numIslands = function (grid) {
  let countIslands = 0;

  for (let rowIndx in grid) {
    for (let colIndx in grid[rowIndx]) {
      //check something
      if (grid[rowIndx][colIndx] === "1") {
        countIslands++;
        teraFrom(parseInt(rowIndx), parseInt(colIndx), grid);
      }
    }
  }
  return countIslands;
};

//convert stuff us to water
const teraFrom = (rowIndx, colIndx, grid) => {
  if (
    grid[rowIndx] === undefined ||
    grid[rowIndx][colIndx] === undefined ||
    grid[rowIndx][colIndx] === "0"
  )
    return;

  grid[rowIndx][colIndx] = "0";
  teraFrom(rowIndx + 1, colIndx, grid);
  teraFrom(rowIndx - 1, colIndx, grid);
  teraFrom(rowIndx, colIndx + 1, grid);
  teraFrom(rowIndx, colIndx - 1, grid);
};
