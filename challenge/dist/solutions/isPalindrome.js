box.isPalindrome = function isPalindrome(x) {
  const w = new Set("abcdefghijklmnopqrstuvwxyz0123456789");
  const len = x.length;
  const lwr = x.toLowerCase();
  let sf = "";

  for (let i = 0; i < len; i++) {
    const c = lwr[i];
    if (w.has(c)) sf += c;
  }

  const sfLen = sf.length;
  const hlfLen = Math.floor(sfLen / 2);

  for (let i = 0; i < hlfLen; i++)
    if (sf[i] !== sf[sfLen - i - 1]) return false;

  return true;
};
