// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {

  const array = []
  // const newarray = []
  // // console.log(s)
  for (let i = 1; i <= n; i++) {
    array.push(i)
    // console.log(m)
  }

  if (n > m) {
    let newarray = array.slice(s, m)
    console.log(newarray)

    return newarray[newarray.length - 1]
  }
  else if (m > n) {
    let newarray = array.slice(s, m)
    // console.log(newarray)
    console.log(m % n)
    console.log(array)
    return array[m % n]
  }



}
module.exports = saveThePrisoner