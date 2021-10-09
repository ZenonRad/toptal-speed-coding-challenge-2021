box.firstUniqueChar = function firstUniqueChar(x) {
  const count = {};

  x.split("").forEach((char) => {
    if (!count[char]) count[char] = 1;
    else count[char]++;
  });

  for (const char of Object.keys(count)) {
    if (count[char] === 1) return char;
  }

  return false;
};
