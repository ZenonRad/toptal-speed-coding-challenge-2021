box.findAverage = function findAverage(x) {
  let len = x.length;
  if (len === 0) return 0;

  let sum = 0;
  for (let i = 0; i < len; i++) sum += x[i];
  return Math.ceil(sum / len);
};
