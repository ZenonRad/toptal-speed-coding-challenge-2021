box.digitOccurrence = function digitOccurrence(n, x) {
  let count = 0;
  const len = n.toString().length;

  for (let i = 0; i < len; i++) {
    const power = parseInt(Math.pow(10, i));
    const down = n - (n % (power * 10));
    const up = down + power * 10;
    const digit = parseInt(n / power) % 10;

    if (digit < x) count += down / 10;
    else if (digit > x) count += up / 10;
    else count += down / 10 + (n % power) + 1;
  }

  if (x === 0) {
    let diff = 0;
    for (let i = 1; i < len; i++) diff += Math.pow(10, i);
    count -= diff;
  }

  return count;
};
