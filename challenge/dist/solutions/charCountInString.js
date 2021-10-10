box.charCountInString = function charCountInString(x, y) {
  let n = 0;
  for (let i = 0; i < y.length; i++) if (y[i] === x) n++;
  return n;
};
