box.arrayToObject = function arrayToObject(x) {
  if (x.length === 0) return [];
  const obj = {};

  for (let i = 0; i < x.length; i++) {
    const item = x[i];
    obj[item[0]] = item[1];
  }

  return obj;
};
