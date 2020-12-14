const createSpiral = (n) => {
  const outerArray = [];
  for (let i = 1; i <= n; i++) {
    outerArray.push([]);
  }

  let num = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;

  //Perform the following loops until the starting row meets the ending row and the starting column meets the ending column, meaning all the arrays are full.
  while (startRow <= endRow && startColumn <= endColumn) {
    //Iterate across the first row from the starting column to the ending column, then increment the starting row by 1 since it's already filled
    for (let i = startColumn; i <= endColumn; i++) {
      outerArray[startRow][i] = num;
      num++;
    }
    startRow++;
    //Iterate down the ending column index of each array from the starting row to the ending row, and decrement the ending column by 1 since it's filled
    for (let i = startRow; i <= endRow; i++) {
      outerArray[i][endColumn] = num;
      num++;
    }
    endColumn--;
    //Iterate backwards across the last row from the ending column to the starting column, and decrement the ending row by 1 since it's filled
    for (let i = endColumn; i >= startColumn; i--) {
      outerArray[endRow][i] = num;
      num++;
    }
    endRow--;
    //Iterate backwards up the starting column index of each array from the ending row to the starting row, and increment the starting column by 1 since it's filled.
    for (let i = endRow; i >= startRow; i--) {
      outerArray[i][startColumn] = num;
      num++;
    }

    startColumn++;
  }
  return outerArray;
};

module.exports = createSpiral;
