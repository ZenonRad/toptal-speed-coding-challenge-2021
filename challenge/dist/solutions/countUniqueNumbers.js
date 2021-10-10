box.countUniqueNumbers = function countUniqueNumbers(x) {
  const exist = {};
  let n = 0;

  for (let i = 0; i < x.length; i++) {
    const item = x[i];

    if (!exist[item]) {
      exist[item] = 1;
      n++;
    }
  }

  return n;
};
