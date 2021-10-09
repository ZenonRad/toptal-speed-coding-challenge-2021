box.replaceSpaces = function replaceSpaces(x) {
  let result = "";

  for (let i = 0; i < x.length; i++) {
    const c = x[i];
    result += c === " " ? "%20" : c;
  }

  return result;
};
