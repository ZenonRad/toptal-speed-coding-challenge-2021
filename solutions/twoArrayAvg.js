box.twoArrayAvg = function twoArrayAvg(x, y) {
  const avg = (arr) => arr.reduce((s, n) => s + n, 0);
  return avg([avg(x), avg(y)]);
};
