box.findWord = function findWord(word, sentence) {
  const result = sentence.split(word);
  if (result.length < 2) return [];
  return [result[0].length, result[0].length + word.length - 1];
};
