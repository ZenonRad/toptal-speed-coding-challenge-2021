box.isAnagram = function isAnagram(x, y) {
  if (x.length !== y.length) return false;

  const from = {};
  const to = {};
  const keys = [];

  for (let i = 0; i < x.length; i++) {
    const xc = x[i];
    const yc = y[i];

    if (from[xc]) from[xc] = from[xc] + 1;
    else {
      from[xc] = 1;
      keys.push(xc);
    }

    to[yc] = to[yc] ? to[yc] + 1 : 1;
  }

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (from[key] !== to[key]) return false;
  }

  return true;
};
