box.sortArrayDesc = function sortArrayDesc(x) {
  // x is an array of strings
  // return sorted array of strings in descending order
  // (ex. x=["b", "a", "z"], you should return ["z", "b", "a"])

  const sorted = x.sort();

  let result = [];
  let len = sorted.length;

  for (let i = 0; i < len; i++) {
    result.push(sorted[len - i - 1]);
  }

  return result;
};
