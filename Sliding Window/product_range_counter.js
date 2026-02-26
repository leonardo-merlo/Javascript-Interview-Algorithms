// Have the function ProductRangeCounter(arr, k) return the total number of contiguous subarrays whose product is strictly less than k. All numbers are positive integers. Example Input: arr = [1,2,3], k = 5 Output: 4

function ProductRangeCounter(arr, k) {
  let subArrays = 0;
  let left = 0;
  let product = 1;

  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];

    while (product >= k) {
      product /= arr[left];
      left++;
    }
    subArrays += right - left + 1;
  }
  return subArrays;
}

console.log(ProductRangeCounter([1, 2, 3], 5)); // Output: 4
console.log(ProductRangeCounter([10, 5, 2, 6], 100)); // Output: 8
console.log(ProductRangeCounter([1, 1, 1], 2)); // Output: 6
