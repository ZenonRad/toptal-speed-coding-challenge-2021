box.isPrime = function isPrime(x) {
  if (x <= 3) return x > 1;
  if (x % 2 === 0 || x % 3 === 0) return false;

  let count = 5;

  while (Math.pow(count, 2) <= x) {
    if (x % count === 0 || x % (count + 2) === 0) return false;
    count += 6;
  }

  return true;
};
