box.missingInteger = function missingInteger(x) {
  // Given an array of positive integers, determine the missing integer
  // (ex. arr = [1,4,3,2,6] it should return 5)
  // (ex. arr = [1,2,3] should return 4 as there are no missing integer in between)

  if (x.length === 0) return 1;

  const len = x.length;
  let min = Number.MAX_VALUE;
  let max = 0;

  for (let i = 0; i < len; i++) {
    const v = x[i];
    if (min > v) min = v;
    if (max < v) max = v;
  }

  const found = new Set(x);
  let i = min;

  for (; i <= max; i++) if (!found.has(i)) return i;

  return i;
};
