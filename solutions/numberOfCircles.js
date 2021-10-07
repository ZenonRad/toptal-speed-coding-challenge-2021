box.numberOfCircles = function numberOfCircles(x) {
  const map = { 0: 1, 6: 1, 8: 2, 9: 1 };
  return x
    .toString()
    .split("")
    .reduce((s, d) => {
      if (map[d]) return s + map[d];
      return s;
    }, 0);
};
