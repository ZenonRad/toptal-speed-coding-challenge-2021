box.findUniqueNumber = function findUniqueNumber(x) {
  const len = x.length;
  const count = {};
  const keys = [];

  for (let i = 0; i < len; i++) {
    const n = x[i];

    if (count[n]) count[n] = count[n] + 1;
    else {
      count[n] = 1;
      keys.push(n);
    }
  }

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (count[key] === 1) return parseInt(key);
  }
};
