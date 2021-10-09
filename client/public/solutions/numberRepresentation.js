box.numberRepresentation = function numberRepresentation(arr) {
  const occurrences = {};
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const c = arr[i];
    occurrences[c] = occurrences[c] ? occurrences[c] + 1 : 1;
  }

  const sorted = Object.keys(occurrences).sort();
  let representation = "";

  for (let i = 0; i < sorted.length; i++) {
    const c = sorted[i];
    representation += String(occurrences[c]);
  }

  return Number(representation);
};
