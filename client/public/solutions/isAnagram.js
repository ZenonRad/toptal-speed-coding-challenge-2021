box.isAnagram = function isAnagram(x, y) {
  // x and y are strings.
  // return boolean
  // (ex. x="heart", y="earth", you should return true)

  if (x.length !== y.length) return false;

  const from = {};
  const to = {};

  for (let i = 0; i < x.length; i++) {
    const xc = x[i];
    const yc = y[i];

    from[xc] = from[xc] ? from[xc] + 1 : 1;
    to[yc] = to[yc] ? to[yc] + 1 : 1;
  }

  const keys = Object.keys(from);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (from[key] !== to[key]) return false;
  }

  return true;
};
