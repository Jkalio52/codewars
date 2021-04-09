function sudoku(puzzle) {
  //return the solved puzzle as a 2d array of 9 x 9 
  const solvedPuzzle = JSON.parse(JSON.stringify(puzzle));

  const check = (value, row, col) => {
    for (let index = 0; index < 9; index++) {
      let x = parseInt(row / 3) * 3, y = parseInt(col / 3) * 3;
      if (
        solvedPuzzle[row][index] === value ||
        solvedPuzzle[index][col] === value ||
        solvedPuzzle[parseInt(index / 3) + x][index % 3 + y] === value) {
        return false
      }
    }
    
    return true;
  }

  const guess = (row, col, value = 1) => {
    while (!check(value, row, col)) {
      value++;
      if (value > 9) {
        return null;
      }
    }
    
    return value > 9 ? null : value;
  }

  const next = (i, backtrack = false) => {
    const x = parseInt(i / 9);
    const y = i % 9;

    if (puzzle[x][y] > 0 && !backtrack) {
      solvedPuzzle[x][y] = puzzle[x][y];
      return [i + 1, backtrack];
    }

    if (puzzle[x][y] > 0 && backtrack) {
      return [i - 1, backtrack];
    }

    const cell = guess(x, y, backtrack ? solvedPuzzle[x][y] + 1 : 1);
    if (cell) {
      solvedPuzzle[x][y] = cell;
      backtrack = false;
      return [i + 1, backtrack]
    }

    if (!cell) {
      solvedPuzzle[x][y] = 0;
      backtrack = true;
      return [i - 1, backtrack];
    }
  }

  for (let i = 0, backtrack = false; i < 81; [ i, backtrack ] = next(i, backtrack)) {}

  return solvedPuzzle;
}
