box.digitOccurrence = function digitOccurrence(n, x) {
  // n is an integer, x is a single-digit number
  // return a number
  // (ex. n=11, x=1, it should return 4 because ‘1’ appears up 4 times between 0 and 11)

  // let count = 0;

  // for (let di = 0; di < n.toString().length; di++) {
  //   const power = parseInt(Math.pow(10, di));
  //   const down = n - (n % (power * 10));
  //   const up = down + power * 10;
  //   const digit = parseInt(n / power) % 10;

  //   if (digit < x) count += down / 10;
  //   else if (digit > x) count += up / 10;
  //   else count += down / 10 + (n % power) + 1;
  // }

  // return count;

  let allNumbers = "";
  let count = 0;

  for (let i = 0; i < n + 1; i++) allNumbers = allNumbers.concat(String(i));

  for (let i = 0; i < allNumbers.length; i++)
    if (allNumbers[i] == String(x)) count++;

  return count;
};
