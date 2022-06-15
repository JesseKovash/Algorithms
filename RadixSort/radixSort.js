//iterative implementation
function radixSort(arr) {
  const maxCount = getDigitCount(arr);
  for (let i=0; i < maxCount; i++) {
    let numContainer = [[],[],[],[],[],[],[],[],[],[]];
    for (let j=0; j < arr.length; j++) {
      let currDigit = getDigit(arr[j], i);
      numContainer[currDigit].push(arr[j])
    }
    arr = [].concat(...numContainer);
  }
  return arr;
}
//helpers
function getDigitCount(nums) {
  let maxCount = 0;
  for (let i=0; i < nums.length;  i++) {
    maxCount = Math.max(maxCount, Math.abs(nums[i].toString().length))
  }
  return maxCount
}

function getDigit(number, index) {
  const numStr = number.toString();
  return +numStr[(numStr.length - 1) - index] ?
    +numStr[(numStr.length - 1) - index] : 0
}

//recursive implementation
// function radixSort(arr, index=0) {
//   let numContainer = [[],[],[],[],[],[],[],[],[],[]];
//   let altered = false;
//   for (var i=0; i < arr.length; i++) {
//     let currNumStr = Math.abs(arr[i]).toString();
//     let currNum = currNumStr[(currNumStr.length - 1) - index];
//     if (!currNum || arr[i] < 0) {
//       numContainer[0].push(arr[i])
//     } else {
//       numContainer[+currNum].push(arr[i])
//       altered = true;
//     }
//   }
//   return altered ? radixSort(numContainer.flat(), index + 1) : numContainer.flat()
// }
console.log(radixSort([99, 547, 10099, 1, 6001, 457, 553]))