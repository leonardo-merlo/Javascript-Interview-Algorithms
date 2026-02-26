// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

function subArraySumEqualsK(nums, k) {
  let prefixSum = {};
  prefixSum[0] = 1;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let difference = sum - k;

    if (prefixSum[difference]) {
      count += prefixSum[difference];
    }
    prefixSum[sum] = (prefixSum[sum] || 0) + 1;
  }
  return count;
}

console.log(subArraySumEqualsK([1, 1, 1], 2)); // Output: 2
console.log(subArraySumEqualsK([1, 2, 3], 3)); // Output: 2
console.log(subArraySumEqualsK([1, -1, 0], 0)); // Output: 3
