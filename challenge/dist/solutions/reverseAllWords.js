box.reverseAllWords = function reverseAllWords(x) {
  const len = x.length;
  let word = "";
  let s = "";

  for (let i = 0; i < len; i++) {
    const c = x[i];

    if (c === " ") {
      s = `${s}${word} `;
      word = "";
    } else word = `${c}${word}`;
  }

  return `${s}${word}`;
};
