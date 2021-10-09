box.findUniqueNumber = function findUniqueNumber(x) {
  // x is an array of numbers
  // return a number
  // (ex. x=[1,1,2,4,2,4,3] you should return 3)

  const occurrences = {};

  for (const item of x) {
    occurrences[item] = occurrences[item] ? occurrences[item] + 1 : 1;
  }

  return parseInt(
    Object.entries(occurrences).find(([_, occurrence]) => occurrence === 1)[0],
  );
};
