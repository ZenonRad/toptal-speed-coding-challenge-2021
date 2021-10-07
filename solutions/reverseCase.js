box.reverseCase = function reverseCase(x) {
  return x
    .split("")
    .map((char) => {
      if (char === char.toLowerCase()) return char.toUpperCase();
      return char.toLowerCase();
    })
    .join("");
};
