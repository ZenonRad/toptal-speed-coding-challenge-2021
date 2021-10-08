box.findAverage = function findAverage() {
  return Math.ceil(x.reduce((s, c) => s + c, 0) / x.length);
};
