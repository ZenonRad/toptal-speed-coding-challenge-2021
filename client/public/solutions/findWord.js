box.findWord = function findWord(word, sentence) {
  // Given word and sentence as two strings,
  // Return the start and end indices of the word in the sentence as an array
  // (ex. word="morning" sentence="Good morning coders!" should return [5,11])

  const index = sentence.toLowerCase().indexOf(word.toLowerCase());
  if (index === -1) return [];
  return [index, index + word.length - 1];
};
