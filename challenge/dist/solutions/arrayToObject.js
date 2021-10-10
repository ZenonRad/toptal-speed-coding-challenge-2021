box.arrayToObject = function arrayToObject(x) {
  if (x.length === 0) return [];
  return Object.fromEntries(x);
};
