box.averageAsciiChar = function averageAsciiChar(x) {
  const len = x.length;
  let sum = 0;
  for (let i = 0; i < len; i++) sum += x[i].charCodeAt(0);
  return String.fromCharCode(Math.round(sum / len));
};
