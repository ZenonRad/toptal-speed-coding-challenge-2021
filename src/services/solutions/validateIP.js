box.validateIP = function validateIP(x) {
  const arr = x.split(".");
  if (arr.length !== 4) return false;

  try {
    return arr.every((str) => {
      const n = Number(str);
      return !Number.isNaN(n) && n >= 0 && n <= 255;
    });
  } catch {
    return false;
  }
};
