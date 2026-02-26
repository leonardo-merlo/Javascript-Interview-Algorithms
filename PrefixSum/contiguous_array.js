// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0s and 1s. Input:  nums = [0, 1]          →  Output: 2 Input:  nums = [0, 1, 0, 1, 1] →  Output: 4

function continuousSubArraySum(nums) {
  let maxLen = 0;
  let balance = 0;
  let map = { 0: -1 };

  for (let i = 0; i < nums.length; i++) {
    balance += nums[i] === 1 ? 1 : -1;

    if (map[balance] !== undefined) {
      maxLen = Math.max(maxLen, i - map[balance]);
    } else {
      map[balance] = i;
    }
  }
  return maxLen;
}

console.log(continuousSubArraySum([0, 1])); // Output: 2
console.log(continuousSubArraySum([0, 1, 0, 1, 1])); // Output: 4
console.log(continuousSubArraySum([0, 0, 1, 1, 0])); // Output: 4
