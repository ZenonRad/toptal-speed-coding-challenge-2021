box.removeDuplicates = function removeDuplicates(x) {
  return x
    .split("")
    .filter((c, i, self) => self.indexOf(c) === i)
    .join("");
};
