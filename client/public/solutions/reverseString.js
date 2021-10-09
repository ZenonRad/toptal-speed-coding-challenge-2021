box.reverseString = function reverseString(x) {
  let result = "";
  let len = x.length;

  for (let i = 0; i < len; i++) {
    result += x[len - i - 1];
  }

  return result;
};
