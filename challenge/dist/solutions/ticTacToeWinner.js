box.ticTacToeWinner = function ticTacToeWinner(matrix) {
  // x is an array that includes 3 child arrays, every child represents a row of a tic tac toe matrix
  // return 'x', 'o', or 'draw'
  // (ex. x=[["x", "o", "x"], ["o", "x", "o"], ["o", "o", "x"]],
  // you should return 'x' because 'x' player is the winner)

  const size = matrix.length;
  const x = "x";
  const o = "o";

  let score = {
    [x]: {
      row: {},
      column: {},
      dialog: 0,
      antiDialog: 0,
    },
    [o]: {
      row: {},
      column: {},
      dialog: 0,
      antiDialog: 0,
    },
  };

  const win = { [x]: false, [o]: false };

  const inc = (obj, index) => {
    obj[index] = obj[index] ? obj[index] + 1 : 1;
  };

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const c = matrix[i][j];
      const s = score[c];

      inc(s.row, i);
      inc(s.column, j);

      if (i === j) s.dialog++;
      if (i + j === size - 1) s.antiDialog++;

      if (
        s.row[i] == size ||
        s.column[j] == size ||
        s.dialog == size ||
        s.antiDialog == size
      )
        win[c] = true;
    }
  }

  if (win[x] === true && win[o] === true) return "error";
  if (win[x]) return x;
  if (win[o]) return o;
  return "draw";
};
