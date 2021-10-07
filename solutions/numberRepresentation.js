box.numberRepresentation = function numberRepresentation(arr) {
  const occurences = {};

  arr.forEach((c) => {
    if (!occurences[c]) occurences[c] = 0;
    occurences[c]++;
  });

  return Number(
    Object.keys(occurences)
      .sort()
      .map((c) => occurences[c])
      .join("")
  );
};
