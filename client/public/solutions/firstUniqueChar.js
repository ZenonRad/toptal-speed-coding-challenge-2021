box.firstUniqueChar = function firstUniqueChar(x) {
  const count = {};
  const len = x.length;

  for (let i = 0; i < len; i++) {
    const char = x[i];
    count[char] = count[char] ? count[char] + 1 : 1;
  }

  const keys = Object.keys(count);

  for (let i = 0; i < keys.length; i++) {
    const char = keys[i];
    if (count[char] === 1) return char;
  }

  return false;
};
