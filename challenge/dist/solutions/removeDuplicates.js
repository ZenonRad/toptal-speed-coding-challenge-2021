box.removeDuplicates = function removeDuplicates(x) {
  const unique = new Set();
  let result = "";

  for (let i = 0; i < x.length; i++) {
    const c = x[i];

    if (!unique.has(c)) {
      unique.add(c);
      result += c;
    }
  }

  return result;
};
