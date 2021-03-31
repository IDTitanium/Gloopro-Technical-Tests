// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
  const array = []

  for (let x = i; x <= j; x++) {
    console.log(x)
    // x - 
    const reverves = x.toFixed(0).split("").reverse().join("")

    console.log(x - reverves)
    const div = x - reverves
    console.log(div / 6)
    // if (parseInt(div / 6)) {
    //     console.log(div/6)
    // }
    return div / 6
    // array.push(x)

  }
  // console.log(array)
  // return null;
  // for ()
}

beautifulDays(20, 23, 6)

module.exports = beautifulDays