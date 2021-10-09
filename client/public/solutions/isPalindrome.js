box.isPalindrome = function isPalindrome(x) {
  const safe = x.replace(/[_\W]/g, "").toLowerCase();

  const len = safe.length;
  const halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    if (safe[i] !== safe[len - i - 1]) return false;
  }

  return true;
};
