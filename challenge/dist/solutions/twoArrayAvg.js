box.twoArrayAvg = function twoArrayAvg(x, y) {
  const avg = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum / (arr.length || 1);
  };

  return (avg(x) + avg(y)) / 2;
};
