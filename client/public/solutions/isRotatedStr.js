box.isRotatedStr = function isRotatedStr(x, y) {
  // x and y are strings;
  // return boolean
  // (ex. x="vwxyz", y="xyzvw", you should return true because we when shifting v and w to the rightmost
  // it will match y)

  return x.length === y.length && (x + x).indexOf(y) !== -1;
};
