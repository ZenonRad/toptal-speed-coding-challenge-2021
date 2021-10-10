box.firstUniqueChar = function firstUniqueChar(x) {
  const len = x.length;
  const count = {};
  const keys = [];

  for (let i = 0; i < len; i++) {
    const c = x[i];

    if (count[c]) count[c] = count[c] + 1;
    else {
      count[c] = 1;
      keys.push(c);
    }
  }

  for (let i = 0; i < keys.length; i++) {
    const c = keys[i];
    if (count[c] === 1) return c;
  }

  return false;
};
