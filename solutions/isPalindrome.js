box.isPalindrome = function isPalindrome(x) {
  const safe = x.replace(/[_\W]/g, "").toLowerCase();

  for (let i = 0; i < Math.floor(safe.length / 2); i++) {
    if (safe[i] !== safe[safe.length - i - 1]) return false;
  }

  return true;
};
