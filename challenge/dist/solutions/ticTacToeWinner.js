box.ticTacToeWinner = function ticTacToeWinner(matrix) {
  const size = matrix.length;

  let score = {
    x: { row: {}, column: {}, dialog: 0, antiDialog: 0 },
    o: { row: {}, column: {}, dialog: 0, antiDialog: 0 },
  };

  const win = { x: false, o: false };

  const inc = (obj, i) => {
    obj[i] = obj[i] ? obj[i] + 1 : 1;
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

  if (win.x === true && win.o === true) return "error";
  if (win.x) return "x";
  if (win.o) return "o";
  return "draw";
};
