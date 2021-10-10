box.isRotatedStr = function isRotatedStr(x, y) {
  return x.length === y.length && (x + x).indexOf(y) !== -1;
};
