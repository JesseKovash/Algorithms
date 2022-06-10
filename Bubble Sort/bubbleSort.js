//naive
function bubbleSort(arr) {
  function swap(ind1, ind2) {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
  }

  for (let i=arr.length; i > 0; i--) {
    for (let j= 0; j <arr.length; j++) {
      let elOne = arr[j];
      let elTwo = arr[j + 1];
      if (elOne  > elTwo) {
        swap(j, j + 1)
      }
    }
  }
  return arr
}

//improved
function bubbleSort(arr) {
  function swap(ind1, ind2) {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
  }

  for (let i=arr.length; i > 0; i--) {
    for (let j= 0; j <i - 1; j++) {
      let elOne = arr[j];
      let elTwo = arr[j + 1];
      if (elOne  > elTwo) {
        swap(j, j + 1)
      }
    }
  }
  return arr
}

//optimized
function bubbleSort(arr) {
  let noSwaps;
  function swap(ind1, ind2) {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
  }

  for (let i=arr.length; i > 0; i--) {
    noSwaps = true
    for (let j= 0; j <i - 1; j++) {
      let elOne = arr[j];
      let elTwo = arr[j + 1];
      if (elOne  > elTwo) {
        swap(j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) break;
  }
  return arr
}

console.log(bubbleSort([5,-13,6,4,9,2,1]))
console.log(bubbleSort([10,1,2,3,4,5,6,7,8,9]))