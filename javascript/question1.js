// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
  // n: Num of Prisoners
  // m: num of candy
  // s: start seat
  // let candySlots = Array(m).fill(0);
  let candyLeft = m;
  let currentSeat = s;
  while(candyLeft>1){
    candyLeft--;
    if(currentSeat==n){
      currentSeat=1
    }else{currentSeat++}
  }
  return currentSeat;
}

// console.log(saveThePrisoner(3, 7, 3))

module.exports = saveThePrisoner