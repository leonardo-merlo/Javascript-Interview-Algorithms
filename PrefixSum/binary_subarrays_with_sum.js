// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum equal to goal. Input:  nums = [1, 0, 1, 0, 1], goal = 2  →  Output: 4 Input:  nums = [0, 0, 0, 0, 0], goal = 0  →  Output: 15

function numSubarraysWithSum(nums, goal) {
  let count = { 0: 1 };
  let sum = 0;
  let result = 0;

  for (let num of nums) {
    sum += num;
    if (count[sum - goal] !== undefined) {
      result += count[sum - goal];
    }

    count[sum] = (count[sum] || 0) + 1;
  }
  return result;
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2)); // Output: 4
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0)); // Output: 15
console.log(numSubarraysWithSum([1, 1, 1, 1, 1], 3)); // Output: 3
