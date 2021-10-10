box.reverseAllWords = function reverseAllWords(x) {
  return x
    .split(" ")
    .map((s) => s.split("").reverse().join(""))
    .join(" ");
};
