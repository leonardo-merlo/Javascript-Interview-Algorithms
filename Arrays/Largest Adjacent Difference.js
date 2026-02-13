//Have the function LargestAdjacentDifference(arr) take the array of integers and return the largest absolute difference between any two adjacent elements. Array will always contain at least 2 numbers. Example Input: [2,7,3,1,8] Output: 7

function LargestAdjacentDifference(arr) {
  let largest = 0;
  for (let i = 1; i < arr.length; i++) {
    let dif = Math.abs(arr[i] - arr[i - 1]);
    if (dif > largest) largest = dif;
  }
  return largest;
}

console.log(LargestAdjacentDifference([2, 7, 3, 1, 8])); // Output: 7
console.log(LargestAdjacentDifference([9, 1, 3, 1, 8])); // Output: 8
