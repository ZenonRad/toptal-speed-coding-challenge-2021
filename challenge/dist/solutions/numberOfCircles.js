box.numberOfCircles = function numberOfCircles(x) {
  const map = { 0: 1, 6: 1, 8: 2, 9: 1 };

  let n = 0;
  const stringified = x.toString();
  const len = stringified.length;

  for (let i = 0; i < len; i++) {
    n += map[stringified[i]] || 0;
  }

  return n;
};
