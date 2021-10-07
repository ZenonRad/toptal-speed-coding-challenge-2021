box.multiplierCount = function multiplierCount(x, y) {
  let m = 1;
  let n = 0;

  while (true) {
    if (y * m <= x) {
      m++;
      n++;
    } else return n;
  }
};
