// Have the function MinimumCoverageSumSegment(arr, target) return the smallest length of a contiguous subarray whose sum is greater than or equal to target. If none exists return 0 Array contains only positive integers. Example: Input: target = 11 // arr = [1,2,3,4,5]. // Output: 3

function MinimumCoverageSumSegment(arr, target) {
  let smallest = Infinity;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= target) {
      smallest = Math.min(smallest, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }
  return smallest === Infinity ? 0 : smallest;
}

console.log(MinimumCoverageSumSegment([1, 2, 3, 4, 5], 11)); /// Output: 3
console.log(MinimumCoverageSumSegment([1, 2, 3, 4, 5], 15)); // Output: 5
console.log(MinimumCoverageSumSegment([1, 2, 3, 4, 5], 16)); // Output: 0
