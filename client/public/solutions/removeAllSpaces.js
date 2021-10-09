box.removeAllSpaces = function removeAllSpaces(x) {
  let result = "";

  for (let i = 0; i < x.length; i++) {
    const c = x[i];
    if (c !== " ") result += c;
  }

  return result;
};
