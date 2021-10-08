box.romanToInt = function romanToInt(x) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let n = 0;

  for (i = 0; i < x.length; i++) {
    const ci = map[x[i]];

    if (i + 1 < x.length) {
      const cip = map[x[i + 1]];

      if (ci >= cip) n += ci;
      else {
        n = n + cip - ci;
        i++;
      }
    } else n += ci;
  }

  return n;
};
