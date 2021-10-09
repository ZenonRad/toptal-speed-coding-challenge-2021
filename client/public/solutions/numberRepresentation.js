box.numberRepresentation = function numberRepresentation(arr) {
  const occurrences = {};

  arr.forEach((c) => {
    if (!occurrences[c]) occurrences[c] = 0;
    occurrences[c]++;
  });

  return Number(
    Object.keys(occurrences)
      .sort()
      .map((c) => occurrences[c])
      .join(""),
  );
};
