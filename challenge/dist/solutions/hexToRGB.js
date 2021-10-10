box.hexToRGB = function hexToRGB(x) {
  const pI = (a, b) => parseInt(a + b, 16);
  if (x.length === 4) return [pI(x[1], x[1]), pI(x[2], x[2]), pI(x[3], x[3])];
  return [pI(x[1], x[2]), pI(x[3], x[4]), pI(x[5], x[6])];
};
