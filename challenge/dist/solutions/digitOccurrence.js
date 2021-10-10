box.digitOccurrence = function digitOccurrence(n, x) {
  let count = 0;

  for (let di = 0; di < n.toString().length; di++) {
    const power = parseInt(Math.pow(10, di));
    const down = n - (n % (power * 10));
    const up = down + power * 10;
    const digit = parseInt(n / power) % 10;

    if (digit < x) count += down / 10;
    else if (digit > x) count += up / 10;
    else count += down / 10 + (n % power) + 1;
  }

  return count;
};
