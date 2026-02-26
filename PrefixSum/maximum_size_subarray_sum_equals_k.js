//Given an array nums and an integer k, return the length of the longest subarray with sum equal to k. If none exists, return 0. Input:  nums = [1, -1, 5, -2, 3], k = 3  →  Output: 4 Input:  nums = [-2, -1, 2, 1],    k = 1  →  Output: 2

function maxSubArrayLen(nums, k) {
  let sum = 0;
  let maxLen = 0;
  const sumIndices = { 0: -1 };

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]; // soma feita

    if (sumIndices[sum - k] !== undefined) {
      maxLen = Math.max(maxLen, i - sumIndices[sum - k]);
    }

    if (sumIndices[sum] === undefined) {
      sumIndices[sum] = i;
    }
  }

  return maxLen;
}

console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3)); // Output: 4
console.log(maxSubArrayLen([-2, -1, 2, 1], 1)); // Output: 2
console.log(maxSubArrayLen([1, 2, 3], 6)); // Output: 3
