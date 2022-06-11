function mergeSort(arr) {
  //basecase
  if (arr.length <= 1) {
    return arr
  }
  //recursive case
  const midPoint = Math.floor(arr.length / 2);
  let firstHalf = mergeSort(arr.slice(0,midPoint));
  let secondHalf = mergeSort(arr.slice(midPoint));
  return merge(firstHalf, secondHalf)
}

//Separate function solely for merging two sorted arrays
function merge(arr1, arr2) {
  let complete = [];
  let left = 0;
  let right = 0;
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      complete.push(arr1[left])
      left++;
    } else {
      complete.push(arr2[right])
      right++;
    }
  }
  if (left < arr1.length) {
    complete = complete.concat(arr1.slice(left))
  } else if (right < arr2.length) {
    complete = complete.concat(arr2.slice(right))
  }
  return complete
}

console.log(mergeSort([2,5,4,3,1]))
console.log(mergeSort([1,5,2,7,8,4,3,6,0]))