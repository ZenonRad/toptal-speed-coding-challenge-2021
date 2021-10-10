box.missingInteger = function missingInteger(x) {
  if (x.length === 0) return 1;

  const len = x.length;
  let min = Number.MAX_VALUE;
  let max = 0;
  const found = {};

  for (let i = 0; i < len; i++) {
    const n = x[i];
    found[n] = 1;
    if (min > n) min = n;
    if (max < n) max = n;
  }

  let i = min;
  for (; i <= max; i++) if (!found[i]) return i;
  return i;
};
