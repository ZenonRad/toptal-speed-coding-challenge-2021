box.reverseCase = function reverseCase(x) {
  let result = "";

  for (let i = 0; i < x.length; i++) {
    const char = x[i];
    const lower = char.toLowerCase();
    result += char === lower ? char.toUpperCase() : lower;
  }

  return result;
};
