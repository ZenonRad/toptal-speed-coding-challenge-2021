box.getHalfArray = function getHalfArray(x) {
  const halfLen = Math.ceil(x.length / 2);
  const result = [];

  for (let i = 0; i < halfLen; i++) {
    result.push(x[i]);
  }

  return result;
};
