box.validateIP = function validateIP(x) {
  const arr = x.split(".");
  if (arr.length !== 4) return false;

  try {
    return arr.every((str) => {
      if (!/^\d+$/.test(str)) return false;
      const n = parseInt(str, 10);
      return !Number.isNaN(n) && n >= 0 && n <= 255 && String(n) === str;
    });
  } catch {
    return false;
  }
};
