box.numberRepresentation = function numberRepresentation(arr) {
  const len = arr.length;
  const count = {};
  const keys = [];

  for (let i = 0; i < len; i++) {
    const c = arr[i];

    if (count[c]) count[c] = count[c] + 1;
    else {
      keys.push(c);
      count[c] = 1;
    }
  }

  const sorted = keys.sort();
  let rep = "";

  for (let i = 0; i < sorted.length; i++) {
    const c = sorted[i];
    rep += count[c].toString();
  }

  return Number(rep);
};
