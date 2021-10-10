box.sortArrayDesc = function sortArrayDesc(x) {
  const sorted = x.sort();
  let result = [];
  let len = sorted.length;
  for (let i = 0; i < len; i++) result.push(sorted[len - i - 1]);
  return result;
};
