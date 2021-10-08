box.hexToRGB = function hexToRGB(x) {
  let y = x;

  if (y.length === 4) y = `#${y[1]}${y[1]}${y[2]}${y[2]}${y[3]}${y[3]}`;

  return [0, 1, 2].map((_, i) =>
    parseInt(y.slice(2 * i + 1, 2 * (i + 1) + 1), 16)
  );
};
