box.findAverage = function findAverage(x) {
  return Math.ceil(x.reduce((s, c) => s + c, 0) / x.length);
};
