// Description: Given an array of integers nums and an integer target, find the length of the smallest contiguous subarray whose sum is greater than or equal to target. If no such subarray exists, return 0. Example: Input: nums = [2,3,1,2,4,3], target = 7 Output: 2 Explanation: The subarray [4,3] has sum ≥ 7 and is the shortest possible.

function MinimumSizeSubArraySum(nums, target) {
  let sum = 0;
  let left = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(MinimumSizeSubArraySum([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(MinimumSizeSubArraySum([1, 4, 4], 4)); // 1
console.log(MinimumSizeSubArraySum([1, 1, 1, 1, 1, 1, 1, 1], 11)); // 0
