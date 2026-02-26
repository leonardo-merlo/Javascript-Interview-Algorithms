// Given an integer array nums and an integer k, return true if nums has a continuous subarray of size at least 2 whose elements sum up to a multiple of k (i.e. the sum is 0, k, 2k, 3k, ...). Examples Input:  nums = [23, 2, 4, 6, 7], k = 6 Output: true Explanation: [2, 4] sums to 6, which is a multiple of 6 Input:  nums = [23, 2, 6, 4, 7], k = 6 Output: true Explanation: [23, 2, 6, 4, 7] sums to 42 = 7 * 6 Input:  nums = [23, 2, 6, 4, 7], k = 13 Output: false

function continuousSubArraySum(nums, k) {
  let prefixSum = 0;
  const map = { 0: -1 };

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    const rest = prefixSum % k;

    if (map[rest] !== undefined) {
      if (i - map[rest] >= 2) return true;
    } else {
      map[rest] = i;
    }
  }
  return false;
}

console.log(continuousSubArraySum([23, 2, 4, 6, 7], 6)); // Output: true
console.log(continuousSubArraySum([3, 2, 0], 2)); // Output: true
console.log(continuousSubArraySum([23, 2, 6, 4, 7], 13)); // Output: false
