// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
  // i: the starting day number
  // j: the ending day number
  // k: the divisor

  let beautifulDaysCount = 0;
  for (var x = i; x <= j; x++) {
    let numReverse = Number(`${x}`.split('').reverse().join(""))
    let numDiff = Math.abs(x - numReverse);
    if (numDiff % k == 0) {
      beautifulDaysCount++;
    }
  }
  return beautifulDaysCount;
}

// console.log(beautifulDays(20, 23, 6))
module.exports = beautifulDays