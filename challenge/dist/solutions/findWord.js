box.findWord = function findWord(word, sentence) {
  const index = sentence.toLowerCase().indexOf(word.toLowerCase());
  if (index === -1) return [];
  return [index, index + word.length - 1];
};
