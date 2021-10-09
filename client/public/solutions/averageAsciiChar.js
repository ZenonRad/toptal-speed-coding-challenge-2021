box.averageAsciiChar = function averageAsciiChar(x) {
  return String.fromCharCode(
    Math.round(
      x
        .split("")
        .map((c) => c.charCodeAt(0))
        .reduce((s, n) => s + n, 0) / (x.length || 1),
    ),
  );
};
