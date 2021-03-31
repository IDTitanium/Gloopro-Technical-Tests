// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
  const array = []
  const newarray = []

  for (let x = i; x <= j; x++) {
    console.log(x)
    // x - 
    const reverves = x.toFixed(0).split("").reverse().join("")

    console.log(x - reverves)
    const div = x - reverves
    console.log(div / 6)
    // if (parseInt(div / 6)) {
    newarray.push(div / 6)
    // }
    // return div / 6

    if ((div / 6).isInteger) {
      console.log(div / 6)
    }
    // array.push(x)

  }
  console.log(newarray)

  for (let i = 0; i <= newarray; i++) {

    if (newarray[i].isInteger) {
      console.log(newarray[i])
    }
  }
  // console.log(array)
  // return null;
  // for ()
}

beautifulDays(20, 23, 6)

module.exports = beautifulDays