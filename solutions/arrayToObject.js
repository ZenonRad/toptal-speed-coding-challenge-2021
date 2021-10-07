box.arrayToObject = function arrayToObject(x) {
  return x.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
};
