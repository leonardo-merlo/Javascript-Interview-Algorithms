// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k. A subarray is a contiguous part of the array. Input: nums = [4,5,0,-2,-3,1], k = 5 Output: 7 / Input: nums = [5], k = 9 Output: 0

function divisibleByK(nums, k) {
  let map = { 0: 1 };
  let count = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const rest = sum % k;
    if (rest < 0) {
      rest += k;
    }

    if (map[rest] !== undefined) {
      count += map[rest];
    }
    map[rest] = (map[rest] || 0) + 1;
  }
  return count;
}

console.log(divisibleByK([4, 5, 0, -2, -3, 1], 5)); // Output: 7
console.log(divisibleByK([5], 9)); // Output: 0
console.log(divisibleByK([1, 2, 3, 4, 5], 3)); // Output: 4
