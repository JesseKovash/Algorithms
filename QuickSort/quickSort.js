//Not sorted in place

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let pivot = arr[0];
  let index = 1;
  let swapCount = 0;
  while(index < arr.length) {
    if (arr[index] < pivot) {
      const movedItem = arr.splice(index,1);
      arr.splice(swapCount,0,movedItem[0]);
      swapCount++
    }
  index++
  }
  const firstHalf = arr.slice(0,swapCount);
  pivot = arr[swapCount];
  const secondHalf = arr.slice(swapCount + 1);
  return quickSort(firstHalf).concat(pivot).concat(quickSort(secondHalf))
}

//Sorted In place

// function quickSort(arr, left=0, right=arr.length - 1) {
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right);
//     quickSort(arr, left, pivotIndex - 1);
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr
// }

// function pivot(arr, start=0, end=arr.length - 1) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//   };
//   let pivot = arr[start];
//   let swapIndex = start;

//   for (let i=start + 1; i <= end; i++) {
//     if (pivot > arr[i]) {
//       swapIndex++;
//       swap(arr, swapIndex, i);
//     }
//   }
//   swap(arr, start, swapIndex);
//   return swapIndex;
// }
console.log(quickSort([5,9,1,3,2,4,6,7,10,8,0,-1]))