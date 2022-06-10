function selectionSort(arr) {

  function swap(orig, min) {
    [arr[orig], arr[min]] = [arr[min], arr[orig]]
  }

  for (let i=0; i < arr.length; i++) {
    let minIndex = i;
    for (let j=i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      swap(i, minIndex)
    }
  }
  return arr
}

console.log(selectionSort([1,2,9,3,4,7,8,6,5]))