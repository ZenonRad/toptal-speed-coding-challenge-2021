box.arrayToObject = function arrayToObject(x) {
  if (x.length === 0) return [];
  return x.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
};
