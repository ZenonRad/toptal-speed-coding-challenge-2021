box.missingInteger = function missingInteger(x) {
  // Given an array of positive integers, determine the missing integer
  // (ex. arr = [1,4,3,2,6] it should return 5)
  // (ex. arr = [1,2,3] should return 4 as there are no missing integer in between)

  if (x.length === 0) return 1;

  const found = new Set(x);
  const min = Math.min(...x);
  const max = Math.max(...x);
  let i = min;

  for (; i <= max; i++) if (!found.has(i)) return i;

  return i;
};
