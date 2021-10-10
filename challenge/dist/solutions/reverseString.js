box.reverseString = function reverseString(x) {
  let len = x.length;
  let result = "";
  for (let i = 0; i < len; i++) result += x[len - i - 1];
  return result;
};
