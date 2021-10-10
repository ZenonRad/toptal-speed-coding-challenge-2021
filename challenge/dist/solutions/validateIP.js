box.validateIP = function validateIP(x) {
  const y = `${x}.`;
  const len = y.length;
  const digits = new Set("0123456789");
  let part = "";
  let partNb = 0;

  for (let i = 0; i < len; i++) {
    const c = y[i];

    if (c === ".") {
      if (part.length === 0) return false;
      const n = parseInt(part, 10);
      if (n > 255 || n.toString() !== part) return false;
      part = "";
      partNb++;
    } else {
      if (!digits.has(c)) return false;
      part += c;
    }
  }

  if (partNb !== 4) return false;

  return true;
};
